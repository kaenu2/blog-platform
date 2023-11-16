import { IArticleResponse, IArticlesResponse } from './articles-services.type';

export default class ArticlesServices {
  _apiUrl = 'https://blog.kata.academy/api';

  checkToken = (token: string | null) => {
    return token ? `Token ${token}` : '';
  };

  postOptions = (token: string | null, body: any, method: 'POST' | 'PUT') => {
    return {
      method: method,
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ article: body }),
    };
  };

  deleteOptions = (token: string | null) => {
    return {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    };
  };

  getResponse = async (
    url: string,
    token: string | null = null
  ): Promise<IArticlesResponse | IArticleResponse | any> => {
    const response = await fetch(this._apiUrl + url, {
      method: 'GET',
      headers: {
        Authorization: this.checkToken(token),
        'Content-type': 'application/json; charset=utf-8',
      },
    });
    if (!response.status) {
      throw new Error('Network error!');
    }
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  };

  postResponse = async (
    url: string,
    token: string | null = null,
    body: any,
    method: 'PUT' | 'POST'
  ): Promise<IArticlesResponse | IArticleResponse | any> => {
    const response = await fetch(this._apiUrl + url, this.postOptions(token, body, method));
    if (!response.status) {
      throw new Error('Network error!');
    }
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  };

  deleteResponse = async (url: string, token: string | null = null): Promise<any> => {
    const response = await fetch(this._apiUrl + url, this.deleteOptions(token));

    if (response.ok) return response;

    if (response.status) {
      throw new Error(`${response.status}`);
    }
  };

  getArticles = async (offset: number, limit: number, token: string | null = null): Promise<IArticlesResponse> => {
    return this.getResponse(`/articles?offset=${offset}&limit=${limit}`, token);
  };

  getArticle = async (slug: string, token: string | null = null): Promise<IArticleResponse> => {
    return this.getResponse(`/articles/${slug}`, token);
  };

  createArticle = async (token: string | null, body: any) => {
    return this.postResponse('/articles', token, body, 'POST');
  };

  editArticle = async (token: string | null, body: any, slug: string) => {
    return this.postResponse(`/articles/${slug}`, token, body, 'PUT');
  };

  deleteArticle = async (slug: string, token: string | null) => {
    return this.deleteResponse(`/articles/${slug}`, token);
  };

  favoriteArticle = async (slug: string, token: string | null) => {
    return this.postResponse(`/articles/${slug}/favorite`, token, null, 'POST');
  };

  unFavoriteArticle = async (slug: string, token: string | null) => {
    return this.deleteResponse(`/articles/${slug}/favorite`, token);
  };
}
