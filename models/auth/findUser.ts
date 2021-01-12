import prisma from '../../prisma/prisma';
import { User } from '../../interfaces';

const findEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: { email },
  });
  return user;
};

export default findEmail;
