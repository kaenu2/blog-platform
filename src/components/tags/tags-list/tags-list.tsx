import React from 'react';

import TagItem from '../../tags/tag-item/tag-item';

import { IProps } from './tags-list.types';
import styles from './tags-list.module.scss';

const TagsList: React.FC<IProps> = ({ tags }) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag) => {
        return <TagItem key={tag} tag={tag} />;
      })}
    </ul>
  );
};

export default TagsList;
