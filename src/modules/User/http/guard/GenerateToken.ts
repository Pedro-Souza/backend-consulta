import { sign } from "jsonwebtoken";

const DEFAULT_SECRET_KEY = 'galoDOIDO1A@*';
const DEFAULT_EXPIRES = 99999

const GenerateTokenJWT = (id: string) => {
  const expiresIn = Number(process.env.TOKEN_EXPIRES_IN || DEFAULT_EXPIRES);
  const payload = {
    sub: id,
    iat: Math.floor(Date.now() / 1000),
  };

  const secretKey = process.env.SECRET_KEY || DEFAULT_SECRET_KEY;

  console.log({ secretKey })

  const signedToken = sign(payload, secretKey!, { expiresIn: DEFAULT_EXPIRES });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiresIn,
  };
};

export default GenerateTokenJWT;
