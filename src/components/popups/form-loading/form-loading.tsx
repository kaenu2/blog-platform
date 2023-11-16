import React from 'react';

import { Spinner } from '../../UI';

import styles from './form-loading.module.scss';
import { IProps } from './form-loading.types';

const FormLoading: React.FC<IProps> = ({ onVisible }) => {
  return (
    <div className={styles.parent} onClick={onVisible}>
      <div className={styles.dialog}>
        <Spinner />
      </div>
    </div>
  );
};

export default FormLoading;
