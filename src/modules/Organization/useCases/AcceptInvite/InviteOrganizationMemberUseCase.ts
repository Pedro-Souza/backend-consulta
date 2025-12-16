import { OrganizationRepository } from "../../repositories/OrganizationRepository";

export default class AcceptInvateUseCase {
  constructor(
    private organizationRepository: OrganizationRepository,
  ) {
    this.organizationRepository = organizationRepository;
  }

  async execute({ organizationUserId, userId, userEmail }: { organizationUserId: string, userId: string, userEmail: string }) {
    const result = await this.organizationRepository.updateUserOrganizationById({
      organizationUserId,
      userId,
      userEmail
    });

    return result;
  }
}
