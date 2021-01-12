import prisma from '../../prisma/prisma';

const findEmail = async (email: string): Promise<boolean> => {
  const user = await prisma.user.findFirst({
    where: { email },
  });
  return user ? true : false;
};

export default findEmail;
