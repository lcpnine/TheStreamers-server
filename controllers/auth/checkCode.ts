import { Request, Response } from 'express';
import { redisAsyncGet } from '../../redis';

const checkCode = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, code } = req.body;
    const realCode = await redisAsyncGet(email);
    if (realCode === code) {
      return res.status(200).send({ message: 'Valid Code' });
    }
    return res.status(400).send({ message: 'Invalid Code' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: 'Internal Server Error. Cannot verify code. Please try again.',
    });
  }
};

export default checkCode;
