import argon2id from "argon2";
import { UserRepository } from "../../repositories/UserRepository";
import { Prisma } from "@prisma/client";
import ValidationException from "../../expections/ValidationExpection";

export default class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {
    this.userRepository = userRepository
  }

  async execute({ name, email, password }: { name: string, email: string, password: string }) {
    try {
      const result = await this.userRepository.create({
        name,
        email,
        password: await argon2id.hash(password)
      });

      // TODO: adicionar o email de boas vindas
      return result;
    } catch (e) {
      if ((e as Prisma.PrismaClientKnownRequestError).code === "P2002") {
        throw new ValidationException("", {
          email: 'EMAIL_ALREADY_USED'
        })
      }

      throw e
    }
  }
}
