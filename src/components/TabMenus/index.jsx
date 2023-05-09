import React from 'react';
import styles from './TabMenus.module.scss'

const TabMenus = (props) => {
  return (
    <div className={styles.tabMenus}>
      <h2 className={styles.title}>이유있는 <br />베스트 아이템</h2>
      <ul className={styles.tabs}>
        <li>
          <a className={styles.on} href="">전체</a>
        </li>
        <li>
          <a href="">여성</a>
        </li>
        <li>
          <a href="">남성</a>
        </li>
        <li>
          <a href="">키즈</a>
        </li>
      </ul>
    </div>
  )
};

export default TabMenus;