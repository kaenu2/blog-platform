import React from 'react';

import styles from './pagination.module.scss';
import { IProps } from './pagination.types';

const Pagination = ({ totalPage, activePage, setActivePage }: IProps) => {
  const createArrBtn = (pages: number) => {
    const res = [];
    for (let i = 1; i < pages + 1; i++) {
      res.push(i);
    }
    return res;
  };

  const onChangePage = (page: number) => {
    setActivePage(page);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.array} ${styles.prev}`}
        onClick={() => onChangePage(activePage - 1)}
        disabled={activePage === 1}
        aria-label="Prev page"></button>
      {createArrBtn(totalPage).map((el) => {
        return (
          <button
            className={el === activePage ? `${styles.button} ${styles['button--active']}` : `${styles.button}`}
            key={el}
            onClick={() => onChangePage(el)}>
            {el}
          </button>
        );
      })}
      <button
        className={`${styles.array} ${styles.next}`}
        onClick={() => onChangePage(activePage + 1)}
        disabled={activePage === totalPage}
        aria-label="Next page"></button>
    </div>
  );
};

export default Pagination;
