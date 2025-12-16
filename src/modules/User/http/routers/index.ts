import { Router } from 'express'
//import { UserControllers } from '../controllers/user.controllers';
import passport from '../guard/passport';
const userRouter = Router();

//const userControllers = new UserControllers();

//userRouter.post('/', (req, res) => userControllers.create(req, res));
//userRouter.post('/login', (req, res) => userControllers.login(req, res));
//userRouter.get('/test', passport.authenticate("jwt", { session: false }), (req, res) => res.status(200).end())


userRouter.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  console.log({ mode, token, challenge })
  return res.status(200).send(challenge)
});
userRouter.post('/webhook', (req, res) => {
  console.log('caiu no post')
  console.log(JSON.stringify(req.body))
});
export default userRouter;
