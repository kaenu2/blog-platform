import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface IProps {
  label: string;
  hasError: any | undefined;
  refName: string;
  options: RegisterOptions;
  field: UseFormRegister<any>;
}
