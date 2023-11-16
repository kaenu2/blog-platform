import React from 'react';
import { Link } from 'react-router-dom';

import { Button, LinkButton } from '../../../UI/buttons';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';

import styles from './menu-user.module.scss';

const MenuUser = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { logOutUser } = useActions();
  return (
    <nav className={styles.menu}>
      <div className={styles.link}>
        <LinkButton link="/new-article" label="Create article" type="success" size="sm" />
      </div>
      <Link to="/profile" className={styles.user}>
        <p>{user?.username}</p>
        <img
          src={user?.image ? user?.image : 'https://i.postimg.cc/nzQgHRmc/149071.png'}
          alt={user?.username}
          width={50}
          height={50}
        />
      </Link>
      <div className={styles.btn}>
        <Button type="outline" color="default" label="Log Out" callback={logOutUser} />
      </div>
    </nav>
  );
};

export default MenuUser;
