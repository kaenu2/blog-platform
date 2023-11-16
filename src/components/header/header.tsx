import React from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './header.module.scss';
import { Menu, MenuUser } from './components';

const Header = () => {
  const { entrance } = useTypedSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          Realworld Blog
        </Link>
        {entrance ? <MenuUser /> : <Menu />}
      </div>
    </header>
  );
};

export default Header;
