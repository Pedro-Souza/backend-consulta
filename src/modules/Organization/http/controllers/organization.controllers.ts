import { Request, Response } from 'express'
import CreateOrganization from '../../useCases/CreateOrganization'
import InviteMember from '../../useCases/InviteMemberUseCase';
import AcceptInvite from '../../useCases/AcceptInvite';

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

  async invite(req: Request, res: Response): Promise<void> {
    try {
      const { inviteMemberUseCase } = await InviteMember();
      // TODO: pegar o userId to token quando estiver implementado
      const organization = await inviteMemberUseCase.execute({
        organizationId: req.body.organizationId,
        role: req.body.role,
        userEmail: req.body.userEmail,
        userName: req.body.userName,
      });

      res.status(201).json(organization)
    } catch (error) {
      console.log(error)
      res.status(400).json()
    }
  };

  async accept(req: Request, res: Response): Promise<void> {
    try {
      const { acceptInvateUseCase } = await AcceptInvite();
      // TODO: pegar o userId to token quando estiver implementado
      const organization = await acceptInvateUseCase.execute({
        organizationUserId: req.body.organizationUserId,
        userEmail: req.body.userEmail,
        userId: req.body.userId,
      });

      res.status(200).json(organization)
    } catch (error) {
      console.log(error)
      res.status(400).json()
    }
  };
}
