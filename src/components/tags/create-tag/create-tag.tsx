import React from 'react';

import { Button } from '../../UI';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './create-tag.module.scss';

const CreateTag = () => {
  // const [value, setValue] = useState('');
  const { tags, tagName } = useTypedSelector((state) => state.article);
  const { createTag, editTagName } = useActions();

  const onCreateTag = (newValue: string) => {
    if (!newValue.trim() || tags.filter((tag) => tag === newValue).length) return;
    createTag(newValue);
    editTagName('');
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.input}
        placeholder="Tag"
        type="text"
        value={tagName}
        onChange={(e) => {
          editTagName(e.target.value);
        }}
      />
      <div className={styles.btnParent}>
        <Button
          type="outline"
          color="primary"
          label="Add tag"
          nodeType="button"
          callback={() => onCreateTag(tagName)}
        />
      </div>
    </li>
  );
};

export default CreateTag;
