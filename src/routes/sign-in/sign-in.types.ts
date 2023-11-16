export interface IShippingFields {
  email: string;
  password: string;
}

export interface IError {
  message?: string;
  email?: string;
  password?: string;
  ['email or password']?: string;
}
