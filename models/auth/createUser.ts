import prisma from '../../prisma/prisma';

const createUser = async (
  email: string,
  password: string,
  username: string
): Promise<void> => {
  await prisma.user.create({
    data: {
      email,
      password,
      username,
    },
  });
};

export default createUser;
