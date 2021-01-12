interface User {
  username: string;
  email: string;
  password: string;
}

interface UserPayload {
  username: string;
  email: string;
}

export { User, UserPayload };
