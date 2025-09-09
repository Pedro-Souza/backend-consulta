import prisma from '@/config/database'
import { UserOrganizationRole, UserOrganizationStatus } from '@prisma/client'

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

  async addMember({ userId, organizationId, role, status }: { userId?: string, organizationId: string, role: UserOrganizationRole, status: UserOrganizationStatus }) {
    return await prisma.organizationUser.create({
      data: {
        userId,
        role,
        status,
        Organization: {
          connect: {
            id: organizationId
          }
        }
      },
    })
  }
}
