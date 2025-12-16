import { Router } from 'express'
import { OrganizationControllers } from '../controllers/organization.controllers'

const organizationRouter = Router()

const organizationControllers = new OrganizationControllers();

// TODO: adicionar auth
organizationRouter.post('/', (req, res) => organizationControllers.create(req, res))
organizationRouter.post('/invite', (req, res) => organizationControllers.invite(req, res))
organizationRouter.post('/accept', (req, res) => organizationControllers.accept(req, res))

export default organizationRouter
