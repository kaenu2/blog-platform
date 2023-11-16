export interface IShippingFields {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  agreement: boolean;
}

export interface IError {
  email?: string;
  password?: string;
  username?: string;
  message?: string;
}
