import React from 'react';

import { IPropsError } from '../global.types';

import styles from './error-message.module.scss';

const ErrorMessage: React.FC<IPropsError> = ({ hasError }) => {
  return <div className={styles.message}>{hasError && <p>{hasError || 'Error!'}</p>}</div>;
};

export default ErrorMessage;
