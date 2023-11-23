import React, { useState } from 'react';

import { useActions } from '../../../hooks/useActions';
import { Button } from '../../UI';

import styles from './tag-item.module.scss';

const TagItem = ({ tag }: { tag: string }) => {
  const [value, setValue] = useState(tag);
  const { removeTag, editTag } = useActions();
  return (
    <li className={styles.item}>
      <input
        className={styles.input}
        placeholder="Tag"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (!value.trim() || value === tag) return;
          editTag({ newValue: value, id: tag });
        }}
      />
      <div className={styles.btnParent}>
        <Button type="outline" color="red" label="Delete" nodeType="button" callback={() => removeTag(value)} />
      </div>
    </li>
  );
};

export default TagItem;
