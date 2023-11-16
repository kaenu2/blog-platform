import { combineReducers } from '@reduxjs/toolkit';

import { articlesReducers } from './articles-reducers/articles-reducers';
import { articleReducer } from './article-reducers/article-reducers';
import { userReducer } from './user-reducer/user-reducer';

export const rootReducer = combineReducers({
  articles: articlesReducers,
  article: articleReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
