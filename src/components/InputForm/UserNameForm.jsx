import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserNameForm = ({ guideTxt }) => {
  // 초기값 세팅 - 네임
  const [name, setName] = useState('');
  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = useState('');
  // 유효성 검사
  const [isName, setIsName] = useState(true)

  const onChangeUserName = (e) => {
    const currentName = e.target.value
    setName(currentName);
    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false)
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsName(true)
    }
  };

  return(
    <>
       <input 
          className={styles.textform} 
          id="input1" 
          placeholder={guideTxt}
          onChange={onChangeUserName}
        /> 
        { name.length > 0 && (
          <p className={ `${styles.warningMsg} ${ isName ? styles.success : styles.error }` }>{nameMessage}</p>
        )}
    </>
  )
};

export default UserNameForm;