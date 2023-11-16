import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ArticleForm } from '../../components/articles';
import { useActions } from '../../hooks/useActions';
import { ArticlesServices } from '../../services';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NewArticleRoute = () => {
  const { getTags } = useActions();
  const { push } = useHistory();
  const { tags } = useTypedSelector((state) => state.article);
  const { entrance } = useTypedSelector((state) => state.user);
  const { animation } = useTypedSelector((state) => state.visible);
  const articleService = new ArticlesServices();

  useEffect(() => {
    getTags([]);
  }, []);

  useEffect(() => {
    if (!entrance) {
      push('/');
    }
  }, [entrance]);

  return (
    <div className={animation ? 'animation-router' : ''}>
      <ArticleForm
        titleForm="Create new article"
        successMessage="Article created successfully"
        errorMessage="Something went wrong. Refresh the page or try again later"
        resetState={true}
        onSubmit={(data, setErrorModal, setSuccessModal) => {
          const token = sessionStorage.getItem('jwt');
          articleService
            .createArticle(token, { ...data, tagList: tags })
            .then(() => setSuccessModal(true))
            .catch(() => setErrorModal(true));
          getTags([]);
        }}
      />
    </div>
  );
};

export default NewArticleRoute;
