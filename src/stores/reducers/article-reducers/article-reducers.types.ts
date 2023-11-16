import { IArticle } from '../../../types/types';
import { IArticleResponse } from '../../../services/articles-services/articles-services.type';

export interface IState {
  isLoading: boolean;
  isError: null | string;
  article: IArticle;
  tags: string[];
}

export enum EArticleActionsType {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
  GET_TAGS = 'GET_TAGS',
  ADD_TAG = 'ADD_TAG',
  EDIT_TAG = 'EDIT_TAG',
  REMOVE_TAG = 'REMOVE_TAG',
}

interface IFetchArticle {
  type: EArticleActionsType.FETCH_ARTICLE;
  payload?: undefined;
}
interface IFetchArticleSuccess {
  type: EArticleActionsType.FETCH_ARTICLE_SUCCESS;
  payload: IArticleResponse;
}
interface IFetchArticleError {
  type: EArticleActionsType.FETCH_ARTICLE_ERROR;
  payload: string;
}

interface IGetTags {
  type: EArticleActionsType.GET_TAGS;
  payload: string[];
}
interface IEditTag {
  type: EArticleActionsType.EDIT_TAG;
  payload: string;
}

interface IRemoveTag {
  type: EArticleActionsType.REMOVE_TAG;
  payload: string;
}

interface IAddTag {
  type: EArticleActionsType.ADD_TAG;
  payload: string;
}

export type TArticleActions =
  | IFetchArticle
  | IFetchArticleSuccess
  | IFetchArticleError
  | IGetTags
  | IEditTag
  | IRemoveTag
  | IAddTag;
