import prisma from '@/config/database'

export class UserRepository {
  async create({ name, email, password }: { name: string, email: string, password: string }) {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
  }

  async getByEmail({ email }: { email: string }) {
    return await prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async authenticate(login: string) {
    return prisma.user.findFirst({
      where: {
        email: {
          equals: login,
          mode: "insensitive",
        },
      }
    });
  }
}
