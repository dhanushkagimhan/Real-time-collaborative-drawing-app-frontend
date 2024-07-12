type UserLoginType = {
  email: string;
  password: string;
};

type UserRegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type { UserLoginType, UserRegisterType };
