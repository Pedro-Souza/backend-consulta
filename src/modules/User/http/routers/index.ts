import { Router } from 'express'
import { UserControllers } from '../controllers/user.controllers';
import passport from '../guard/passport';
const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post('/', (req, res) => userControllers.create(req, res));
userRouter.post('/login', (req, res) => userControllers.login(req, res));
userRouter.get('/test', passport.authenticate("jwt", { session: false }), (req, res) => res.status(200).end())

export default userRouter;
