import prisma from '../../prisma/prisma';

const updateUser = {
  password: async (email: string, newPassword: string): Promise<void> => {
    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: newPassword,
      },
    });
  },
};

export default updateUser;
