import React from 'react';

import { ETypeTypes, IProps, TTypeTypes } from './alert.types';
import styles from './alert.module.scss';

const Alert = ({ title, desc, type }: IProps) => {
  const hasTitle = (types: TTypeTypes): string => {
    switch (types) {
      case ETypeTypes.warning:
        return 'Warning';
      case ETypeTypes.info:
        return 'informational Notes';
      case ETypeTypes.error:
        return 'Error';
      case ETypeTypes.success:
        return 'Success';
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.parent} ${styles[type]}`}>
      <h6 className={styles.title}>{title ? title : hasTitle(type)}</h6>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default Alert;
