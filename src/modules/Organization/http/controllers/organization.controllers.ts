import { Request, Response } from 'express'
import CreateOrganization from '../../useCases/CreateOrganization'

export class OrganizationControllers {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { ceateOrganizationUseCase } = await CreateOrganization();
      // TODO: pegar o userId to token quando estiver implementado
      const organization = await ceateOrganizationUseCase.execute({
        name: req.body.name,
        userId: '5d682f9f-69b6-4579-9468-35934e5902f8'
      });

      res.status(201).json(organization)
    } catch (error) {
      res.status(400).json()
    }
  };

  async addMember(req: Request, res: Response): Promise<void> {
    try {
      const { ceateOrganizationUseCase } = await CreateOrganization();
      // TODO: pegar o userId to token quando estiver implementado
      const organization = await ceateOrganizationUseCase.execute({
        name: req.body.name,
        userId: '5d682f9f-69b6-4579-9468-35934e5902f8'
      });

      res.status(201).json(organization)
    } catch (error) {
      res.status(400).json()
    }
  };
}
