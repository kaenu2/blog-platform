import React from 'react';

import styles from './input-checkbox.module.scss';
import { IProps } from './input-checkbox.types';

const InputCheckbox: React.FC<IProps> = ({ label, options, refName, hasError, field }) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.input} {...field(refName, options)} />
      <span className={hasError ? `${styles.invalid} ${styles.span}` : styles.span}>{label}</span>
    </label>
  );
};

export default InputCheckbox;
