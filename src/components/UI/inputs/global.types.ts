import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface IPropsLabel {
  title: string;
}

export interface IPropsError {
  hasError: string | undefined;
}
export interface IPropsInput {
  hasError: string | undefined;
  type: string;
  placeholder: string;
  field: UseFormRegister<any>;
  refName: string;
  options: RegisterOptions;
  element?: 'text-area';
}
