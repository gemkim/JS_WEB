import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'

const SubMenus = ({list}) => {
  return(
    <li className={styles.subList}>
      <Link href="/">{list}</Link>
    </li>
  )
};

export default SubMenus;