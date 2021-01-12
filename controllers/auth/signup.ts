import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';

const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;
  try {
    await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    return res.status(201).send({ message: 'Signed up successfully' });
  } catch (err) {
    return res
      .status(500)
      .send({ message: 'Sign Up is failed. Please try again.' });
  }
};

export default signUp;
