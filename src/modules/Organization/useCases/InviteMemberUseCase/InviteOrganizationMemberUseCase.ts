import { UserOrganizationRole, UserOrganizationStatus } from "@prisma/client";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import { UserRepository } from "@/modules/User/repositories/UserRepository";
import { emailService, welcomeEmailTemplate } from "@/infra/emails";

export default class InviteOrganizationMemberUseCase {
  constructor(
    private organizationRepository: OrganizationRepository,
    private userRepository: UserRepository
  ) {
    this.organizationRepository = organizationRepository;
    this.userRepository = userRepository
  }

  async execute({ userEmail, organizationId, role, userName }: { userName: string, userEmail: string, organizationId: string, role: UserOrganizationRole }) {
    const user = await this.userRepository.getByEmail({ email: userEmail });
    const hasUserCreated = !!user;

    console.log({ userEmail, organizationId, role, userName, hasUserCreated })

    const result = await this.organizationRepository.addMember({
      userName,
      userEmail,
      organizationId,
      role,
      status: hasUserCreated ? 'ACTIVE' : 'PENDING',
      userId: user?.id
    });

    const template = welcomeEmailTemplate(userName);
    await emailService.sendTemplateEmail(userEmail, template);

    return result;
  }
}
