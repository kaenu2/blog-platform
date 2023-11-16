import React from 'react';

import { ArticleInfo, ArticleUser } from '../index';

import { IProps } from './article-item.types';
import styles from './article-item.module.scss';
const ArticleItem = ({ favoritesCount, title, description, tagList, user, link, favorited }: IProps) => {
  return (
    <li className={styles.article}>
      <ArticleInfo
        favoritesCount={favoritesCount}
        title={title}
        description={description}
        tagList={tagList}
        link={link}
        favorited={favorited}
      />
      <ArticleUser updatedAt={user.updatedAt} image={user.image} username={user.username} />
    </li>
  );
};

export default ArticleItem;
