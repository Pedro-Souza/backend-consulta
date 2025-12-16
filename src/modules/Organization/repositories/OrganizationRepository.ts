import prisma from '@/config/database'
import { UserOrganizationRole, UserOrganizationStatus } from '@prisma/client'

export class OrganizationRepository {
  async create({ name, userId, userEmail, userName }: { userEmail: string, userName: string, name: string, userId: string }) {
    return await prisma.organization.create({
      data: {
        name,
        users: {
          create: {
            userEmail,
            userName,
            role: 'ADMIN',
            userId
          }
        }
      },
    })
  }

  async addMember({ userId, organizationId, role, status, userEmail, userName }: { userEmail: string, userName: string, userId?: string, organizationId: string, role: UserOrganizationRole, status: UserOrganizationStatus }) {
    return await prisma.organizationUser.create({
      data: {
        userId,
        userEmail,
        userName,
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

  async updateUserOrganizationById({ userId, organizationUserId, userEmail }: { userEmail: string, userId: string, organizationUserId: string }) {
    return prisma.organizationUser.update({
      where: {
        id: organizationUserId,
        userEmail,
      },
      data: {
        status: 'ACTIVE',
        userId,
      }
    })
  }
}
