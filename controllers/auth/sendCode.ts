import { Request, Response } from 'express';
import sendMail from './../../utils/sendMail';

const sendCode = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.body;
  try {
    await sendMail(email);
    return res.status(200).send({ message: 'Sent code successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Failed to send code.' });
  }
};

export default sendCode;
