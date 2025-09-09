import { UserOrganizationRole, UserOrganizationStatus } from "@prisma/client";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import { UserRepository } from "@/modules/User/repositories/UserRepository";

export default class InviteOrganizationMemberUseCase {
  constructor(
    private organizationRepository: OrganizationRepository,
    private userRepository: UserRepository
  ) {
    this.organizationRepository = organizationRepository;
    this.userRepository = userRepository
  }

  async execute({ userEmail, organizationId, role }: { userEmail: string, organizationId: string, role: UserOrganizationRole }) {
    const user = await this.userRepository.getByEmail({ email: userEmail });
    const hasUserCreated = !!user;

    const result = await this.organizationRepository.addMember({
      organizationId,
      role,
      status: hasUserCreated ? 'ACTIVE' : 'PENDING',
      userId: user?.id
    });

    //TODO: enviar email de convite
    //Todo: criar fluxo de aceitar o convite

    return result;
  }
}
