import { UserRepository } from "@/modules/User/repositories/UserRepository";
import { OrganizationRepository } from "../../repositories/OrganizationRepository";
import InviteOrganizationMemberUseCase from "./InviteOrganizationMemberUseCase";
import AcceptInvateUseCase from "./InviteOrganizationMemberUseCase";

export default async function AcceptInvite() {
  const organizationRepository = new OrganizationRepository();
  const acceptInvateUseCase = new AcceptInvateUseCase(
    organizationRepository,
  );

  return {
    acceptInvateUseCase
  };
}
