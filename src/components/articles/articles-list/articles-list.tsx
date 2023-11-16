import React from 'react';

import { ArticleItem } from '../index';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './articles-lits.module.scss';

const ArticlesList = () => {
  const { articles } = useTypedSelector((state) => state.articles);
  return (
    <ul className={styles.list}>
      {articles.map((article, index) => {
        const { updatedAt, author, slug, tagList, title, description, favoritesCount, favorited } = article;
        return (
          <ArticleItem
            key={slug + author.username + updatedAt}
            tagList={tagList}
            title={title}
            description={description}
            favoritesCount={favoritesCount}
            user={{ username: author.username, image: author.image, updatedAt }}
            link={slug}
            favorited={favorited}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default ArticlesList;
