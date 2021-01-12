import { Request, Response } from 'express';
import findEmail from './../../models/auth/findEmail';

const checkEmail = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    const mailExist = await findEmail(email);
    if (mailExist) {
      return res.status(400).send({ message: 'Invalid email' });
    }
    return res.status(200).send({ message: 'Valid email' });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: 'Internal Server Error. Please try again.' });
  }
};

export default checkEmail;
