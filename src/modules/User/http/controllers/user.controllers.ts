import { Request, Response } from 'express'
import CreateUser from '../../useCases/CreateUserUseCase';
import AuthUser from '../../useCases/AuthUserUseCase';

// TODO: Criar forma de validar os inputs do requests com o ZOD.

export class UserControllers {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { createUserUseCase } = await CreateUser();

      const user = await createUserUseCase.execute({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      res.status(201).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  };

  async login(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body)
      const { authUserUseCase } = await AuthUser();

      const auth = await authUserUseCase.execute({
        email: req.body.email,
        password: req.body.password
      });

      res.status(200).json(auth)
    } catch (error) {
      res.status(400).json(error)
    }
  };
}
