import React from 'react';
import styles from './JoinUs.module.scss'
import InsertTextForm from 'components/InputForm/InsertTextForm';

const JoinUs = (props) => {
  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form>
            <div className={styles.basicLogin}>
              <InsertTextForm title={'아이디'} type={'text'} />
              <InsertTextForm title={'비밀번호'} type={'password'} />
              <InsertTextForm title={'비밀번호 확인'} type={'password'} />
              <InsertTextForm title={'이름'} type={'text'} />
              <InsertTextForm title={'핸드폰'} type={'text'} />
              <InsertTextForm title={'여자'} type={'text'} />
              <InsertTextForm title={'이메일'} type={'text'} />
              <InsertTextForm title={'주소'} type={'text'} />
            </div>

            <div>
              <h3>전체 동의</h3>
              <div>
                동의하기 체크
              </div>
            </div>

            <div className={styles.btnWrap}>
              <button type='button'>취소</button>
              <button type='submit'>확인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;