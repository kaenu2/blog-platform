import { IArticlesResponse } from '../../../services/articles-services/articles-services.type';
import { IArticle } from '../../../types/types';

export interface IState {
  isLoading: boolean;
  isError: null | string;
  articles: [] | IArticle[];
  countPage: number;
  articlesCount: number;
  limitItemsVisible: number;
}

export enum EArticlesActionsTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
  SET_COUNT_PAGE = 'SET_COUNT_PAGE',
  SET_ARTICLES_COUNT = 'SET_ARTICLES_COUNT',
  FAVORITE_ARTICLE = 'FAVORITE_ARTICLE',
  UN_FAVORITE_ARTICLE = 'UN_FAVORITE_ARTICLE',
}

interface IFetchArticles {
  type: EArticlesActionsTypes.FETCH_ARTICLES;
  payload?: undefined;
}
interface IFetchArticlesSuccess {
  type: EArticlesActionsTypes.FETCH_ARTICLES_SUCCESS;
  payload: IArticlesResponse;
}
interface IFetchArticlesError {
  type: EArticlesActionsTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}
interface ISetCountPage {
  type: EArticlesActionsTypes.SET_COUNT_PAGE;
  payload: number;
}

interface ISetArticlesCount {
  type: EArticlesActionsTypes.SET_ARTICLES_COUNT;
  payload: number;
}

interface IFavoriteArticle {
  type: EArticlesActionsTypes.FAVORITE_ARTICLE;
  payload: IArticle;
}
interface IUnFavoriteArticle {
  type: EArticlesActionsTypes.UN_FAVORITE_ARTICLE;
  payload: IArticle;
}

export type TArticlesActions =
  | IFetchArticles
  | IFetchArticlesSuccess
  | IFetchArticlesError
  | ISetCountPage
  | ISetArticlesCount
  | IFavoriteArticle
  | IUnFavoriteArticle;
