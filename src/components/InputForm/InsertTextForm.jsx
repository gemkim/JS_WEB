import React from 'react';
import styles from './Form.module.scss'

const InsertTextForm = ({title, guideTxt, type = 'text'}) => {
  return(
    <input className={styles.textform} id="input1" type={type} placeholder={guideTxt} />
  )
};

export default InsertTextForm;