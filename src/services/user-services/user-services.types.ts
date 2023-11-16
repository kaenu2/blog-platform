export interface ILogin {
  user: {
    email: string;
    password: string;
  };
}

export interface IRegister {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
