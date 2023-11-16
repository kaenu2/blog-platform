import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../index';
import { ArticleRoute, ArticlesRoute, EditRoute, NewArticleRoute, ProfileRoute, SignIn, SignUp } from '../../routes';
import { useActions } from '../../hooks/useActions';
import { Button } from '../UI';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './app.module.scss';

const App = () => {
  const { setEntrance, fetchUser, setVisible } = useActions();
  const { animation } = useTypedSelector((state) => state.visible);
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
      <div className={styles.modalParent}>
        <Button
          label={animation ? 'Отключить анимацию' : 'Включить анимацию'}
          type="default"
          color="primary"
          nodeType="button"
          size="sm"
          callback={() => setVisible(!animation)}
        />
      </div>
    </div>
  );
};

export default App;
