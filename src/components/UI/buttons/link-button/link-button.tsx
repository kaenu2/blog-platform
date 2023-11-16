import React from 'react';
import { Link } from 'react-router-dom';

import { IProps } from './link-button.types';
import styles from './link-button.module.scss';

const LinkButton: React.FC<IProps> = ({ link, label, type, size }) => {
  return (
    <Link className={`${styles.link} ${styles[type]} ${styles[size]}`} to={link}>
      {label}
    </Link>
  );
};

export default LinkButton;
