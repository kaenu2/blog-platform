import React from 'react';

export interface IProps {
  type: TType;
  label: string;
  color?: TColor;
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
  size?: TSize;
  nodeType?: 'button' | 'reset' | 'submit';
}

type TType = 'default' | 'outline';
type TColor = 'red' | 'default' | 'primary';
type TSize = 'sm';
