import { Request, Response } from 'express';
import findUser from './../../models/auth/findUser';

const checkEmail = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    const user = await findUser(email);
    if (user) {
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
