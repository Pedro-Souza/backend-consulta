import { UserRepository } from "../../repositories/UserRepository";
import AuthUserUseCase from "./AuthUserUseCase";

export default async function AuthUser() {
  const userRepository = new UserRepository()
  const authUserUseCase = new AuthUserUseCase(
    userRepository
  );

  return {
    authUserUseCase
  };
}
