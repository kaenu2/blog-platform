import React from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Spinner } from '../../UI';
import { useActions } from '../../../hooks/useActions';
// import TagsList from '../../tags/tags-list/tags-list';
import TagsList from '../../../components/tags/tags-list/tags-list';

import styles from './article-info.module.scss';
import { IProps } from './article-info.types';

const ArticleInfo = ({ tagList, favoritesCount, title, description, link, favorited }: IProps) => {
  const { isLoading } = useTypedSelector((state) => state.article);
  const token = sessionStorage.getItem('jwt');
  const { onFavoriteArticle, onUnFavoriteArticle } = useActions();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.info}>
      <div className={styles.titleLayout}>
        <Link className={styles.title} to={`/articles/${link}`}>
          {title}
        </Link>
        <button
          className={favorited ? `${styles.btnLike} ${styles.btnLikeActive}` : styles.btnLike}
          disabled={token ? false : true}
          onClick={() => {
            if (!favorited) {
              onFavoriteArticle(link);
            } else {
              onUnFavoriteArticle(link);
            }
          }}>
          {favoritesCount}
        </button>
      </div>
      <ul className={styles.list}>
        <TagsList tags={tagList} />
      </ul>
      <div>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

export default ArticleInfo;
