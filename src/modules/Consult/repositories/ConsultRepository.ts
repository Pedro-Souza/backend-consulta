import prisma from '@/config/database'
import { Prisma } from '@prisma/client'

export class ConsultRegisterRepository {
  async create({ cpf, birthDate, metadata, organizationId }: { cpf: string, birthDate: string, metadata: any, organizationId: string }) {
    return await prisma.consultRegister.create({
      data: {
        organizationId,
        metadata,
        cpf,
        birthday: birthDate
      },
    })
  }
}
