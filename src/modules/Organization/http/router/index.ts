import { Router } from 'express'
import { OrganizationControllers } from '../controllers/organization.controllers'

const organizationRouter = Router()

const organizationControllers = new OrganizationControllers()
organizationRouter.post('/', (req, res) => organizationControllers.create(req, res))

export default organizationRouter
