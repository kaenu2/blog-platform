import React from 'react';

import { ArticleInfo, ArticleUser } from '../index';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { IProps } from './article-item.types';
import styles from './article-item.module.scss';
const ArticleItem = ({ favoritesCount, title, description, tagList, user, link, favorited, index }: IProps) => {
  const { animation } = useTypedSelector((state) => state.visible);
  return (
    <li
      className={animation ? `${styles.article} ${styles.anim}` : styles.article}
      style={{ animationDelay: animation ? `${index * 300}ms` : '0ms' }}>
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
