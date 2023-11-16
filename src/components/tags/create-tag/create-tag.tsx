import React, { useState } from 'react';

import { Button } from '../../UI';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './create-tag.module.scss';

const CreateTag = () => {
  const [value, setValue] = useState('');
  const { tags } = useTypedSelector((state) => state.article);
  const { createTag } = useActions();

  const onCreateTag = (newValue: string) => {
    if (!newValue.trim() || tags.filter((tag) => tag === newValue).length) return;
    createTag(newValue);
    setValue('');
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.input}
        placeholder="Tag"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.btnParent}>
        <Button type="outline" color="primary" label="Add tag" nodeType="button" callback={() => onCreateTag(value)} />
      </div>
    </li>
  );
};

export default CreateTag;
