import { UserRepository } from "../../repositories/UserRepository";
import CreateUserUseCase from "./CreateUserUseCase";
import CreateOrganizationUseCase from "./CreateUserUseCase";

export default async function CreateUser() {
  const userRepository = new UserRepository()
  const createUserUseCase = new CreateUserUseCase(
    userRepository
  );

  return {
    createUserUseCase
  };
}
