import { UserRepository } from "@/modules/User/repositories/UserRepository";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import InviteOrganizationMemberUseCase from "./InviteOrganizationMemberUseCase";

export default async function InviteMember() {
  const organizationRepository = new OrganizationRepository();
  const userRepository = new UserRepository();
  const inviteMemberUseCase = new InviteOrganizationMemberUseCase(
    organizationRepository,
    userRepository
  );

  return {
    inviteMemberUseCase
  };
}
