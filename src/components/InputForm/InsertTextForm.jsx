import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserPhoneForm = ({formType, guideTxt, type = 'text'}) => {
  // 초기값 세팅 - 아이디, 닉네임, 전화번호, 생년월일
  const [phone, setPhone] = useState('');
  // 오류메세지 상태 저장
  const [phoneMessage, setPhoneMessage] = useState('');
  // 유효성 검사
  const [isPhone, setIsPhone] = useState(true)

  const onChangeUserPhone = (e) => {
    const currentPhone = e.target.value;
   setPhone(currentPhone);
   const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

   if (!phoneRegExp.test(currentPhone)) {
     setPhoneMessage("올바른 형식이 아닙니다!");
     setIsPhone(false)
   } else {
     setPhoneMessage("사용 가능한 번호입니다:-)");
     setIsPhone(true)
   }
  };
  
  return(
    <>
      <input 
        className={styles.textform} 
        id="input1" 
        type={type} 
        placeholder={guideTxt}
        onChange={onChangeUserPhone}
      /> 
      { phone.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isPhone ? styles.success : styles.error }` }>{phoneMessage}</p>
      )}
    </>
  
  )
};

export default UserPhoneForm;