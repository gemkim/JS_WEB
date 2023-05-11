import React from 'react';
import styles from './Hambuger.module.scss'

const HambugerMenu = () => {
  return (
    <button type='button' className={`${styles.hambuger}`}>
      <span className={styles.hambugerBar}></span>
    </button>
  )
};

export default HambugerMenu;