import React from 'react';
import styles from './Login.module.scss'
import InsertTextForm from 'components/InputForm/InsertTextForm';

const Login = (props) => {
  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form>
            <div className={styles.basicLogin}>
              <InsertTextForm title={'로그인'} guideTxt={'아이디'} />
              <InsertTextForm title={'비밀번호'} guideTxt={'비밀번호 입력하세요'} type={'password'} />
            </div>
            <div className={styles.socialArea}>
              <h3>SNS 로그인 인증</h3>
              <ul className={styles.socialLogin}>
                <li>
                  <a href="">카카오 로그인</a>
                </li>
                <li>
                  <a href="">카카오 로그인</a>
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