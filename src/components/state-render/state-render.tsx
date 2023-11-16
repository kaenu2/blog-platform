import React, { JSX } from 'react';

import { Alert, Spinner } from '../UI';

import { IProps } from './state-render.types';

export const StateRender = ({ isLoading, isError, children }: IProps): JSX.Element => {
  const hasErrorRender = isNaN(Number(isError)) ? (
    <Alert desc="Please check your internet connection and refresh the page." title="Network Error" type="error" />
  ) : (
    <Alert desc={`Failed to fetch, HTTP error: ${isError}`} type="error" />
  );
  if (isLoading) return <Spinner />;
  if (isError) return hasErrorRender;
  return <>{children}</>;
};
