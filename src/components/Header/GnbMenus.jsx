import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'

const GnbMenus = ({category, link}) => {
  return (
    <Link className={styles.gnb} to={link}>
      {category}
    </Link>
  )
};

export default GnbMenus;