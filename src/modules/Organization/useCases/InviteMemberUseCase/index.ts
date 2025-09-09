import { UserRepository } from "@/modules/User/repositories/UserRepository";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import CreateOrganizationUseCase from "./InviteOrganizationMemberUseCase";

export default async function CreateOrganization() {
  const organizationRepository = new OrganizationRepository();
  const userRepository = new UserRepository();
  const ceateOrganizationUseCase = new CreateOrganizationUseCase(
    organizationRepository,
    userRepository
  );

  return {
    ceateOrganizationUseCase
  };
}
