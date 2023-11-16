import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ArticleForm } from '../../components/articles';
import { StateRender } from '../../components';
import { IShippingFields } from '../../components/articles/article-form/article-form.types';

interface IParams {
  articleId: string;
}

const EditRoute = () => {
  const { articleId } = useParams<IParams>();
  const { isLoading, article, tags, isError } = useTypedSelector((state) => state.article);
  const { entrance } = useTypedSelector((state) => state.user);
  const { animation } = useTypedSelector((state) => state.visible);
  const { fetchArticle, fetchEditArticle } = useActions();
  const { push } = useHistory();
  const content = { ...article, tags: tags };

  useEffect(() => {
    fetchArticle(articleId);
  }, []);

  useEffect(() => {
    if (!entrance) {
      push('/');
    }
  }, [entrance]);
  const onSubmit = (data: IShippingFields) => {
    const token = sessionStorage.getItem('jwt');
    fetchEditArticle(articleId, token, { ...data, tagList: tags });
  };

  return (
    <StateRender isError={isError} isLoading={isLoading}>
      <div className={animation ? 'animation-router' : ''}>
        <ArticleForm
          titleForm="Edit article"
          onSubmit={onSubmit}
          resetState={false}
          content={content}
          successMessage="Article successfully modified"
          errorMessage="Something went wrong. Refresh the page or try again later"
        />
      </div>
    </StateRender>
  );
};

export default EditRoute;
