import { IArticle } from '../../types/types';

export interface IArticleResponse {
  article: IArticle;
}

export interface IArticlesResponse {
  articles: IArticle[];
  articlesCount: number;
}
