import React from 'react';

import { IPropsInput } from '../global.types';

import styles from './input.module.scss';

const Input: React.FC<IPropsInput> = ({
  hasError,
  type,
  placeholder,
  field,
  refName,
  options,
  element,
  onClearError,
}) => {
  if (element === 'text-area') {
    return (
      <textarea
        className={hasError ? `${styles.inputElement} ${styles.invalid}` : `${styles.inputElement}`}
        placeholder={placeholder}
        onFocus={() => (onClearError ? onClearError : () => {})}
        {...field(refName, options)}
      />
    );
  }
  return (
    <input
      className={hasError ? `${styles.inputElement} ${styles.invalid}` : `${styles.inputElement}`}
      type={type}
      placeholder={placeholder}
      onFocus={() => {
        if (onClearError) {
          onClearError();
        }
      }}
      {...field(refName, options)}
    />
  );
};

export default Input;
