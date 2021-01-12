import { Request, Response } from 'express';
import createUser from '../../models/auth/createUser';

const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;
  try {
    await createUser(email, password, username);
    return res.status(201).send({ message: 'Signed up successfully' });
  } catch (err) {
    return res
      .status(500)
      .send({ message: 'Sign Up failed. Please try again.' });
  }
};

export default signUp;
