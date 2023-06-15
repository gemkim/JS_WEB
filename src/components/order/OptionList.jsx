import React from 'react';
import styles from './TableFormLists.module.scss'

const OptionList = ({item, idx}) => {
  idx = idx + 1

  return (
    <p>
      {idx}_{item.name} <em className={styles.extraCount}>{item.count}</em>개 <em className={styles.extraCharge}>{item.price}원</em>
    </p>
  )
};

export default OptionList;