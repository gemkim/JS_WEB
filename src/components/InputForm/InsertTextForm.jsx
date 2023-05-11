import React from 'react';
import styles from './Form.module.scss'

const InsertTextForm = ({title, guideTxt, type = 'text'}) => {
  return(
    <label className={styles.label} htmlFor="input1">
      <span className={styles.title}>{title} :</span>
      <input id="input1" type={type} placeholder={guideTxt} />
    </label>
  )
};

export default InsertTextForm;