import { UserPayload } from '../interfaces';

declare module 'express' {
  export interface Request {
    user?: UserPayload;
  }
}
