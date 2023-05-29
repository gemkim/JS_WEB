import React, { useState } from 'react';
import styles from './Form.module.scss'

const RadioButton = ({ children, value, name, chekcedState }) =>{
  const [ dataForm, setDataForm ] = useState({
    wonan: true,
    man: false
  })
  const { woman, man } = dataForm

  const onSelectGender = (e) => {
    const currentValue = e.target.value
    const checkedMan = watch('gender') === 'M';
    const checkedWoman = watch('gender') === 'W';
  
  }
  return(
    <label className={styles.chkBoxWrap}>
      <input
        type="radio"
        value={value}
        name={name}
        disabled={dataForm}
        checked={
          name === woman ? true : false
        }
        onChange={onSelectGender}
      />
      <span className={styles.text}>{children}</span>
    </label>
  )
};

export default RadioButton;