import prisma from '@/config/database'

export class OrganizationRepository {
  async create({ name, userId }: { name: string, userId: string }) {
    return await prisma.organization.create({
      data: {
        name,
        users: {
          create: {
            role: 'ADMIN',
            userId
          }
        }
      },
    })
  }
}
