import { defaultArticle } from '../../../utils';

import { EArticleActionsType, IState, TArticleActions } from './article-reducers.types';

const initialState: IState = {
  isLoading: false,
  article: defaultArticle,
  isError: null,
  tags: ['code'],
  tagName: '',
};

export const articleReducer = (state = initialState, { type, payload }: TArticleActions): IState => {
  switch (type) {
    case EArticleActionsType.FETCH_ARTICLE:
      return { ...state, isError: null, isLoading: true, article: defaultArticle };
    case EArticleActionsType.FETCH_ARTICLE_SUCCESS:
      return { ...state, isError: null, isLoading: false, article: payload.article };
    case EArticleActionsType.FETCH_ARTICLE_ERROR:
      return { ...state, isLoading: false, article: defaultArticle, isError: payload };
    case EArticleActionsType.ADD_TAG:
      return { ...state, tags: [...state.tags, payload] };
    case EArticleActionsType.EDIT_TAG:
      return { ...state, tags: state.tags.map((tag) => (tag === payload.id ? payload.newValue : tag)) };
    case EArticleActionsType.GET_TAGS:
      return { ...state, tags: payload };
    case EArticleActionsType.REMOVE_TAG:
      return { ...state, tags: state.tags.filter((tag) => tag !== payload) };
    case EArticleActionsType.EDIT_TAG_NAME:
      return { ...state, tagName: payload };
    default:
      return state;
  }
};
