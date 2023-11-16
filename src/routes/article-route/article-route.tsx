import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { ArticleInfo, ArticleUser } from '../../components/articles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Container } from '../../components/layout';
import { StateRender } from '../../components';
import { Button, LinkButton } from '../../components/UI';
import { DeleteModal } from '../../components/popups';

import styles from './article-route.module.scss';

const ArticleRoute = () => {
  const { article, isLoading, isError } = useTypedSelector((state) => state.article);
  const { user } = useTypedSelector((state) => state.user);
  const { tagList, slug, body, favoritesCount, author, title, description, updatedAt, favorited } = article;
  const { fetchArticle } = useActions();
  const { articleId } = useParams<{ articleId: string }>();

  useEffect(() => {
    const token = sessionStorage.getItem('jwt');
    fetchArticle(articleId, token);
  }, []);

  const [modalDel, setModalDel] = useState(false);

  return (
    <Container size="xs">
      <StateRender isLoading={isLoading} isError={isError}>
        <div className={`animation-router ${styles.layout}`}>
          <div className={styles.info}>
            <ArticleInfo
              favoritesCount={favoritesCount}
              title={title}
              description={description}
              tagList={tagList}
              link={slug}
              favorited={favorited}
            />
            <div>
              <ArticleUser username={author.username} image={author.image} updatedAt={updatedAt} />
              {user?.username === author.username ? (
                <div className={styles.btnGroup}>
                  <div className={styles.btn}>
                    <LinkButton link={`/articles/${slug}/edit`} label="Edit" type="success" size="sm" />
                  </div>
                  <div className={styles.btn}>
                    <Button
                      type="outline"
                      label="Delete"
                      color="red"
                      size="sm"
                      callback={() => setModalDel((prevState) => !prevState)}
                    />
                    {modalDel ? <DeleteModal slug={articleId} setModalDel={() => setModalDel(false)} /> : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.body}>
            <Markdown>{body}</Markdown>
          </div>
        </div>
      </StateRender>
    </Container>
  );
};

export default ArticleRoute;
