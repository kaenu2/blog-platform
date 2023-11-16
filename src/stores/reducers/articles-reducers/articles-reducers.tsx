import { EArticlesActionsTypes, IState, TArticlesActions } from './articles-reducers.type';

const initialState: IState = {
  isLoading: false,
  isError: null,
  articles: [],
  countPage: 1,
  articlesCount: 0,
  limitItemsVisible: 5,
};

export const articlesReducers = (state = initialState, { type, payload }: TArticlesActions): IState => {
  switch (type) {
    case EArticlesActionsTypes.FETCH_ARTICLES:
      return { ...state, articles: [], isError: null, isLoading: true };
    case EArticlesActionsTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload.articles,
        isLoading: false,
        isError: null,
        articlesCount: payload.articlesCount,
      };
    case EArticlesActionsTypes.FETCH_ARTICLES_ERROR:
      return { ...state, articles: [], isLoading: false, isError: payload };
    case EArticlesActionsTypes.SET_COUNT_PAGE:
      return { ...state, countPage: payload };
    case EArticlesActionsTypes.FAVORITE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.slice(
            0,
            state.articles.findIndex((article) => article.slug === payload.slug)
          ),
          payload,
          ...state.articles.slice(state.articles.findIndex((article) => article.slug === payload.slug) + 1),
        ],
      };
    case EArticlesActionsTypes.UN_FAVORITE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.slice(
            0,
            state.articles.findIndex((article) => article.slug === payload.slug)
          ),
          payload,
          ...state.articles.slice(state.articles.findIndex((article) => article.slug === payload.slug) + 1),
        ],
      };
    default:
      return state;
  }
};
