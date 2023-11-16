import React from 'react';

import styles from './tags-article.module.scss';

const TagsArticle = ({ tagList }: { tagList: string[] }) => {
  return (
    <ul className={styles.list}>
      {tagList.map((tag, i) => (
        <li className={styles.tag} key={tag + i}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsArticle;
