import { Request, Response } from 'express';
import findUser from '../../models/auth/findUser';
import { comparePassword } from '../../utils/crypto';

const signIn = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    const user = await findUser(email);
    if (!user) return res.status(400).send({ message: 'Invalid Email' });

    const validPassword = await comparePassword(password, user.password);
    if (validPassword) {
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
