import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';

const signIn = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) return res.status(400).send({ message: 'Invalid Email' });
    if (user.password !== password) {
      return res.status(400).send({ message: 'Invalid password' });
    }
    return res.status(200).send({ message: 'Signed in successfully' });
  } catch (err) {
    return res
      .status(500)
      .send({ message: 'Sign In failed. Please try again.' });
  }
};

export default signIn;
