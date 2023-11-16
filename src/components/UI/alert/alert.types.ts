export interface IProps {
  title?: string | undefined;
  desc: string;
  type: TTypeTypes;
}

export enum ETypeTypes {
  warning = 'warning',
  error = 'error',
  info = 'info',
  success = 'success',
}

export type TTypeTypes = 'warning' | 'error' | 'info' | 'success';
