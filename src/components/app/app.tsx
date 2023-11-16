import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../index';
import { ArticleRoute, ArticlesRoute, EditRoute, NewArticleRoute, ProfileRoute, SignIn, SignUp } from '../../routes';
import { useActions } from '../../hooks/useActions';

const App = () => {
  const { setEntrance, fetchUser } = useActions();
  useEffect(() => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      setEntrance(true);
      fetchUser(token);
    }
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <ArticlesRoute />
          </Route>
          <Route path="/articles/" exact>
            <ArticlesRoute />
          </Route>
          <Route path="/articles/:articleId/" exact>
            <ArticleRoute />
          </Route>
          <Route path="/profile">
            <ProfileRoute />
          </Route>
          <Route path="/new-article">
            <NewArticleRoute />
          </Route>
          <Route path="/articles/:articleId/edit" exact>
            <EditRoute />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
