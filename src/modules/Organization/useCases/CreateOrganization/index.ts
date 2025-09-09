import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import CreateOrganizationUseCase from "./CreateOrganizationUseCase";

export default async function CreateOrganization() {
  const organizationRepository = new OrganizationRepository()
  const ceateOrganizationUseCase = new CreateOrganizationUseCase(
    organizationRepository
  );

  return {
    ceateOrganizationUseCase
  };
}
