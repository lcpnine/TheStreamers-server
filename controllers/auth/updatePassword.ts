import { Request, Response } from 'express';
import updateUser from '../../models/auth/updateUser';
import { encryptPassword } from '../../utils/crypto';

const updatePassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;
  const encryptedNewPassword = await encryptPassword(password);
  try {
    await updateUser.password(email, encryptedNewPassword);
    return res.status(200).send({ message: 'Password changed successfully' });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: 'Internal Server Error. Please try again' });
  }
};

export default updatePassword;
