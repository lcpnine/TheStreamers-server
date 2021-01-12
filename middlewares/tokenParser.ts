import { Request, Response, NextFunction } from 'express';
import { decodeJWT } from './../utils/jwt';

const tokenParsers = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.jwt;
  if (token) {
    req.user = decodeJWT(token);
  }
  next();
};

export default tokenParsers;
