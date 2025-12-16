import { OrganizationRepository } from "../../repositories/OrganizationRepository";

export default class CreateOrganizationUseCase {
  constructor(
    private organizationRepository: OrganizationRepository
  ) {
    this.organizationRepository = organizationRepository
  }

  async execute({ name, userId }: { name: string, userId: string }) {
    const result = await this.organizationRepository.create({
      name,
      userId,
      userEmail: '',
      userName: ''
    });

    return result;
  }
}
