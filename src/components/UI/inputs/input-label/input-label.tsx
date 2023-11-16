import React from 'react';

import { IPropsLabel } from '../global.types';

import styles from './input-label.module.scss';

type TProps = IPropsLabel & {
  children: React.ReactElement;
};

const InputLabel: React.FC<TProps> = ({ children, title }) => {
  return (
    <label className={styles.label}>
      {title}
      {children}
    </label>
  );
};

export default InputLabel;
