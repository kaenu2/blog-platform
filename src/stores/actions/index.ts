import * as ArticlesActionsCreators from './articles-actions/articles-actions';
import * as ArticleActionsCreators from './article-actions/article-actions';
import * as UserActionsCreators from './user-actions/user-actions';

export default {
  ...ArticlesActionsCreators,
  ...ArticleActionsCreators,
  ...UserActionsCreators,
};
