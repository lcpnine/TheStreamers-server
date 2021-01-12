import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import randomInt from './randomInt';
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS || '7');

const encryptPassword = async (password: string): Promise<string> => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

const createCode = async (email: string): Promise<string> => {
  const hashedMail = await encryptPassword(email);
  return Array.from(
    { length: 5 },
    () => hashedMail[randomInt(hashedMail.length)]
  ).join('');
};

export { encryptPassword, comparePassword, createCode };
