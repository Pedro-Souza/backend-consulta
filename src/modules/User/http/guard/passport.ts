import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import prisma from '@/config/database'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY!,
};

passport.use(
  "jwt",
  new Strategy(options, async (jwtPayload, done) => {
    console.log('estamos passandoa qui?')
    const user = await prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });

    console.log(user)
    if (!user) return done(null, false);

    return done(null, user);
  })
);

export default passport;
