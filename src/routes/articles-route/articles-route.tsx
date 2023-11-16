import React, { useEffect } from 'react';

import { Pagination, StateRender } from '../../components';
import { ArticlesList } from '../../components/articles';
import { useActions } from '../../hooks/useActions';
import { pageCount } from '../../utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './articles-route.module.scss';

const ArticlesRoute = () => {
  const { countPage, limitItemsVisible, articlesCount, isLoading, isError } = useTypedSelector(
    (state) => state.articles
  );
  const { animation } = useTypedSelector((state) => state.visible);
  const { fetchArticles, onSetActivePage } = useActions();

  pageCount(articlesCount, limitItemsVisible);

  useEffect(() => {
    const token = sessionStorage.getItem('jwt');
    fetchArticles((countPage - 1) * 5, limitItemsVisible, token);
  }, [countPage]);

  return (
    <div className={animation ? ` animation-router ${styles.container}` : styles.container}>
      <StateRender isLoading={isLoading} isError={isError}>
        <>
          <ArticlesList />
          <div className={styles.pagination}>
            <Pagination
              setActivePage={(page: number) => {
                onSetActivePage(page);
              }}
              totalPage={5}
              activePage={countPage}
            />
          </div>
        </>
      </StateRender>
    </div>
  );
};

export default ArticlesRoute;
