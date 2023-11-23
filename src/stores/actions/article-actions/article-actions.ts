import { Dispatch } from 'redux';

import { EArticleActionsType, TArticleActions } from '../../reducers/article-reducers/article-reducers.types';
import { ArticlesServices } from '../../../services';
import { IArticleResponse } from '../../../services/articles-services/articles-services.type';

export const fetchArticle = (slug: string, token: string | null = null) => {
  const articlesService = new ArticlesServices();
  return async (dispatch: Dispatch<TArticleActions>) => {
    try {
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE });
      const data = await articlesService.getArticle(slug, token);
      dispatch({ type: EArticleActionsType.GET_TAGS, payload: data.article.tagList });
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE_SUCCESS, payload: data });
    } catch (e: any) {
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE_ERROR, payload: e.message });
    }
  };
};

export const getArticle = (data: IArticleResponse) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.GET_TAGS, payload: data.article.tagList });
    dispatch({ type: EArticleActionsType.FETCH_ARTICLE_SUCCESS, payload: data });
  };
};

export const createTag = (value: string) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.ADD_TAG, payload: value });
  };
};

export const removeTag = (value: string) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.REMOVE_TAG, payload: value });
  };
};
export const editTag = (body: { newValue: string; id: string }) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.EDIT_TAG, payload: body });
  };
};

export const getTags = (values: string[]) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.GET_TAGS, payload: values });
  };
};
export const editTagName = (values: string) => {
  return (dispatch: Dispatch<TArticleActions>) => {
    dispatch({ type: EArticleActionsType.EDIT_TAG_NAME, payload: values });
  };
};

export const fetchEditArticle = (slug: string, token: string | null = null, body: any) => {
  const articlesService = new ArticlesServices();
  return async (dispatch: Dispatch<TArticleActions>) => {
    try {
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE });
      const data = await articlesService.editArticle(token, body, slug);
      dispatch({ type: EArticleActionsType.GET_TAGS, payload: data.article.tagList });
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE_SUCCESS, payload: data });
    } catch (e: any) {
      dispatch({ type: EArticleActionsType.FETCH_ARTICLE_ERROR, payload: e.message });
    }
  };
};
