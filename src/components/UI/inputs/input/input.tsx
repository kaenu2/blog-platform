import React from 'react';

import { IPropsInput } from '../global.types';

import styles from './input.module.scss';

const Input: React.FC<IPropsInput> = ({ hasError, type, placeholder, field, refName, options, element }) => {
  if (element === 'text-area') {
    return (
      <textarea
        className={hasError ? `${styles.inputElement} ${styles.invalid}` : `${styles.inputElement}`}
        placeholder={placeholder}
        {...field(refName, options)}
      />
    );
  }
  return (
    <input
      className={hasError ? `${styles.inputElement} ${styles.invalid}` : `${styles.inputElement}`}
      type={type}
      placeholder={placeholder}
      {...field(refName, options)}
    />
  );
};

export default Input;
