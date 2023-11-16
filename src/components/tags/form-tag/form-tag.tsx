import React from 'react';

import CreateTag from '../create-tag/create-tag';
import TagsList from '../tags-list/tags-list';

import { IProps } from './form-tag.types';
import styles from './form-tag.module.scss';

const FormTag: React.FC<IProps> = ({ tags }) => {
  return (
    <div className={styles.list}>
      <TagsList tags={tags} />
      <CreateTag />
    </div>
  );
};

export default FormTag;
