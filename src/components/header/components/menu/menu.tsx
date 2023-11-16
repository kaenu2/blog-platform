import React from 'react';
import { Link } from 'react-router-dom';

import { LinkButton } from '../../../UI/buttons';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link className={styles.signIn} to="/sign-in">
        Sign In
      </Link>
      <div className={styles.signUp}>
        <LinkButton link="/sign-up" label="Sign Up" type="success" size="lg" />
      </div>
    </nav>
  );
};

export default Menu;
