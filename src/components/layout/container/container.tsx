import React from 'react';

import styles from './container.module.scss';
import { IProps } from './container.types';

const Container = ({ children, size }: IProps) => {
  return <div className={`${styles.container} ${styles[size]}`}>{children}</div>;
};

export default Container;
