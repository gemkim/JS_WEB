import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'

const SubMenus = ({menu}) => {
  return(
    <li>
      <button>{menu}</button>
    </li>
  )
};

export default SubMenus;