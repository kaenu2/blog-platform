import React from 'react';

export interface IProps {
  children?: React.ReactElement;
  size: TSizeTypes;
}
export type TSizeTypes = 'xs' | 'sm';
