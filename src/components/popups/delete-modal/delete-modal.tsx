import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../UI';
import { ArticlesServices } from '../../../services';

import styles from './delete-modal.module.scss';

const DeleteModal = ({ setModalDel, slug }: { setModalDel: () => void; slug: string }) => {
  const articleService = new ArticlesServices();
  const { push } = useHistory();
  return (
    <div className={styles.parent}>
      <div>
        <p className={styles.info}>Are you sure to delete this article?</p>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.buttonParent}>
          <Button
            type="default"
            color="primary"
            label="Yes"
            callback={() => {
              const token = sessionStorage.getItem('jwt');
              articleService
                .deleteArticle(slug, token)
                .then(() => {
                  push('/');
                })
                .catch(console.log);
            }}
          />
        </div>
        <div className={styles.buttonParent}>
          <Button type="outline" color="primary" label="No" callback={setModalDel} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
