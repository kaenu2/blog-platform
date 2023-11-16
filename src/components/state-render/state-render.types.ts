import { JSX } from 'react';

export interface IProps {
  isLoading: boolean;
  isError: null | string;
  children: JSX.Element;
}
