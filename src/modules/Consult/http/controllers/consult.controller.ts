import { Request, Response } from 'express'
import ConsultUseCase from '../../useCases/ConsultUseCase'

export class ConsultController {
  constructor(private consultUseCase: ConsultUseCase
  ) {
    this.consultUseCase = consultUseCase
  }

  async sync(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.consultUseCase.execute({
        cpf: 'asdf',
        organizationId: 'ab2b57db-45ab-4620-9bc9-e3c64a42116c'
      })

      res.status(201).json(user)
    } catch (error) {

      res.status(400).json()
    }
  }

  async async(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.consultUseCase.execute(req.body)


      res.status(201).json(user)
    } catch (error) {

      res.status(400).json(error)
    }
  }
}
