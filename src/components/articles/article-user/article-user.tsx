import React from 'react';
import { format } from 'date-fns';

import { IUSer } from '../article-item/article-item.types';

import styles from './article-user.module.scss';

const ArticleUser = ({ username, image, updatedAt }: IUSer) => {
  const renderTime = (date: string) => {
    const dateFormat = new Date(date);
    return format(dateFormat, 'PPP');
  };
  return (
    <div className={styles.user}>
      <div className={styles.bio}>
        <h6 className={styles.userName}>{username}</h6>
        <span className={styles.date}>{renderTime(updatedAt)}</span>
      </div>
      <div>
        <img className={styles.img} src={image} alt={username} width={46} height={46} />
      </div>
    </div>
  );
};

export default ArticleUser;
