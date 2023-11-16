import { Dispatch } from 'redux';

import { EArticlesActionsTypes, TArticlesActions } from '../../reducers/articles-reducers/articles-reducers.type';
import { ArticlesServices } from '../../../services';

const articlesServices = new ArticlesServices();

export const fetchArticles = (offset: number, limitItemsVisible: number, token: string | null = null) => {
  return async (dispatch: Dispatch<TArticlesActions>) => {
    try {
      dispatch({ type: EArticlesActionsTypes.FETCH_ARTICLES });
      const data = await articlesServices.getArticles(offset, limitItemsVisible, token);
      dispatch({ type: EArticlesActionsTypes.FETCH_ARTICLES_SUCCESS, payload: data });
    } catch (e: any) {
      dispatch({ type: EArticlesActionsTypes.FETCH_ARTICLES_ERROR, payload: e.message });
    }
  };
};

export const onSetActivePage = (page: number) => {
  return (dispatch: Dispatch<TArticlesActions>) => {
    dispatch({ type: EArticlesActionsTypes.SET_COUNT_PAGE, payload: page });
  };
};

export const onFavoriteArticle = (slug: string) => {
  return async (dispatch: Dispatch<TArticlesActions>) => {
    try {
      const token = sessionStorage.getItem('jwt');
      const data = await articlesServices.favoriteArticle(slug, token);
      dispatch({ type: EArticlesActionsTypes.FAVORITE_ARTICLE, payload: data.article });
    } catch (e) {
      console.log(e);
    }
  };
};

export const onUnFavoriteArticle = (slug: string) => {
  return async (dispatch: Dispatch<TArticlesActions>) => {
    try {
      const token = sessionStorage.getItem('jwt');
      const data = await articlesServices.unFavoriteArticle(slug, token);
      const body = await data.json();
      dispatch({ type: EArticlesActionsTypes.UN_FAVORITE_ARTICLE, payload: body.article });
    } catch (e) {
      console.log(e);
    }
  };
};
