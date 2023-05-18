import React, { useState } from 'react';
import styles from './Form.module.scss'

const EmailForm = (props) => {
  // 초기값 세팅 - 이메일
  const [email, setEmail] = useState('');
  // 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState('');
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(true)

  const onChangeUserMail = (e) => {
    const currentEmail = e.target.value;
    const emailRegExp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(currentEmail);
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false)
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true)
    }
  };

  return (
    <>
      <input type="text" placeholder='이메일' onChange={onChangeUserMail} />
      { email.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isEmail ? styles.success : styles.error }` }>{emailMessage}</p>
      )}
      <span className={styles.at}>@</span>
      <select className={styles.emailLists} name="" id="">
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.com">hanmail.com</option>
        <option value="직접입력">직접입력</option>
      </select>
    </>
  )
};

export default EmailForm;