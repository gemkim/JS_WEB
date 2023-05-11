import React from 'react';
import styles from './Login.module.scss'
// import InsertTextForm from 'components/InputForm/InsertTextForm';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form>
            <div className={styles.basicLogin}>
              <input className={styles.formText} type="text" placeholder='아이디' />
              <input className={styles.formText} type="password" placeholder='패스워드' />
              <label className={styles.savedInfo} htmlFor="chkSavedId"><input id='chkSavedId' type="checkbox" />아이디 저장</label>
              <button className={styles.btnLogin} type='button'>로그인하기</button>
              <div className={styles.joinfind}>
                <Link to="">아이디/비밀번호 찾기</Link>
                <Link to="/join-us">회원가입</Link>
              </div>
            </div>
       
            <div className={styles.socialArea}>
              <h3>SNS 로그인 인증</h3>
              <ul className={styles.socialLogin}>
                <li>
                  <Link to="">카카오 로그인</Link>
                </li>
                <li>
                  <Link to="">카카오 로그인</Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;