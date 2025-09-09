import argon2id from "argon2";
import { UserRepository } from "../../repositories/UserRepository";
import { Prisma } from "@prisma/client";
import ValidationException from "../../expections/ValidationExpection";
import GenerateTokenJWT from "../../http/guard/GenerateToken";
import AuthException from "../../expections/AuthExceptions";

export default class AuthUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {
    this.userRepository = userRepository
  }

  async execute({ email, password }: { email: string, password: string }) {
    try {
      console.log('entra aqui', email)
      const user = await this.userRepository.authenticate(email);

      console.log(user)
      if (!user) {
        console.log('estamos aqui?')
        throw new AuthException('INVALID_CREDENTIALS');
      }

      console.log(user.password, password)

      const passMatch = await argon2id.verify(user.password, password);
      if (!passMatch)
        throw new AuthException('INVALID_CREDENTIALS');

      return GenerateTokenJWT(user.id);

    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
