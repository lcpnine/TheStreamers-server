import { Request, Response } from 'express';
import createUser from '../../models/auth/createUser';
import { encryptPassword } from '../../utils/crypto';

const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;
  const encryptedPassword = await encryptPassword(password);
  try {
    await createUser(email, encryptedPassword, username);
    return res.status(201).send({ message: 'Signed up successfully' });
  } catch (err) {
    return res
      .status(500)
      .send({ message: 'Sign Up failed. Please try again.' });
  }
};

export default signUp;
