import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserPayload } from './../interfaces';
dotenv.config();

const privateKey = process.env.JWT_KEY;

const jwtOptions = {
  expiresIn: 8.64e7, // one day to milliseconds
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const instanceOfUserPayload = (data: any): data is UserPayload => {
  return 'username' in data && 'email' in data;
};

const createJWT = (payload: UserPayload): string => {
  const token = jwt.sign(payload, privateKey, jwtOptions);
  return token;
};

const decodeJWT = (token: string): UserPayload => {
  const decoded = jwt.verify(token, privateKey);
  if (!instanceOfUserPayload(decoded)) {
    throw new Error('JWT is not in valid format');
  }
  return decoded;
};

export { createJWT, decodeJWT };
