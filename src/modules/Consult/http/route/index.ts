import { Router } from 'express'
import { ConsultController } from '../controllers/consult.controller'
import ConsultUseCase from '../../useCases/ConsultUseCase'
import FetchCPF from '../../services/FetchCPF'
import { ConsultRegisterRepository } from '../../repositories/ConsultRepository'

const consultRouter = Router()
const fetchSerice = new FetchCPF;
const consultRegisterRepository = new ConsultRegisterRepository()
const consultUseCase = new ConsultUseCase(fetchSerice, consultRegisterRepository)
const consultController = new ConsultController(consultUseCase)

consultRouter.get('/', (req, res) => consultController.sync(req, res))

export default consultRouter
