import React from 'react';

import { IProps } from './button.types';
import styles from './button.module.scss';
const Button: React.FC<IProps> = ({ type, label, callback, color, size, nodeType }) => {
  return (
    <button
      onClick={callback}
      type={nodeType ? nodeType : undefined}
      className={`${styles.btn} ${styles[type]} ${color ? styles[color] : null} ${size ? styles[size] : null} `}>
      {label}
    </button>
  );
};

export default Button;
