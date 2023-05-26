import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserIdForm = ({ guideTxt }) => {
   // 초기값 세팅 - 아이디
  const [id, setId] = useState('');
  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState('');
 // 유효성 검사
  const [isId, setIsId] = useState(true)
  
  const onChangeUserID = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    //공백없는 숫자와 영문자 대소문자 4-12글자
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false)
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true)
    }
  };

  return(
    <>
      <input 
        className={styles.textform} 
        id="input1" 
        type='text' 
        placeholder={guideTxt} 
        onChange={onChangeUserID}
      /> 
      { id.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isId ? styles.success : styles.error }` }>{idMessage}</p>
      )}
    </>
  )
};

export default UserIdForm;