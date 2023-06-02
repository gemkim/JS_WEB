import React, { useState } from 'react';
import { registerUser } from 'api/registerUser'
import styles from './JoinUs.module.scss'

import Button from 'components/Button';
import PasswordCheckForm from 'components/InputForm/PasswordCheckForm';
import EmailForm from 'components/InputForm/EmailForm';
import AddressForm from 'components/InputForm/AddressForm';
import AgreeContents from 'components/AgreeContents';
import RadioButton from 'components/InputForm/RadioButton';
import UserIdForm from 'components/InputForm/UserIdForm';
import UserNameForm from 'components/InputForm/UserNameForm';
import UserPhoneForm from 'components/InputForm/UserPhoneForm';
import UserSsnForm from 'components/InputForm/UserSsnForm';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joinMember } from 'api/joinMember';



const JoinUs = (props) => {
  const [formData, setFormData] = useState({
    "memberId" : "",
    "password" : "",
    "adminYn" :  "",
    "saveStatus" :  "",
    "bankSeq" :  "",
    "bankAccount" :  "",
    "privacyPolicy" :  "",
    "allowPromotions" : "",
    "termsOfService" :  "",
    "phone":  "",
    "email":  "",
    "memberName":  "",
    "ssn":  "",
    "ssn1":  "",
    "ssn2": "",
    "gender": "",
    "transPoint": "0",
    "transLevel": "1",
    "address": "",
    "address1":  "",
    "address2":  "",
    "zipCode":  ""
  });
  const navigate = useNavigate();
  const {
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onValid = (data) => {
    joinMember(formData)
  };
  

  const handleCancel = (e) => {
    console.log('test');
  }

  return(
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>회원가입</h2>
        <div className={styles.loginArea}>
          <form  method="post" onSubmit={handleSubmit(onValid)} >
            <div className={styles.formBox}>
              {/* 아이디 */}
              <UserIdForm 
                name={'memberId'}
                guideTxt={'아이디'} 
                changeText={handleInputChange}
              />  
              {/* 비밀번호/비밀번호 체크 */}
              <PasswordCheckForm
                setFormData={setFormData}
                changeText={handleInputChange}
               /> 
              {/* 이름 */}
              <UserNameForm
                name={'memberName'}
                guideTxt={'이름'}
                changeText={handleInputChange}
               />
              {/* 주민번호 */}
              <UserSsnForm
                setFormData={setFormData}
                changeText={handleInputChange}
               />
              {/* 연락처 */}
              <UserPhoneForm
                name={'phone'}
                guideTxt={'01012345678'}
                changeText={handleInputChange}
               />  
              {/* 젠더 */}
              <div className={styles.gender}>
                <RadioButton 
                  name="gender" 
                  value="w" 
                  current={formData.gender}
                  setFormData={setFormData}
                > 여성
                </RadioButton>
                <RadioButton 
                name="gender" 
                value="m" 
                current={formData.gender}
                setFormData={setFormData}
                > 남성
                </RadioButton>
              </div>
              {/* 메일폼 */}
              <div className={styles.emailform}>
                <EmailForm
                  setFormData={setFormData}
                 />
              </div>
              {/* 주소인증 */}
              <AddressForm 
                setFormData={setFormData}
                address={formData.address1} 
                zipcode={formData.zipCode} 
               />
            </div>
            {/* 동의하기 */}
            <div className={styles.agreeWrap}>
              <h3>전체 동의</h3>
              <div className={styles.agreeContent}>
                <AgreeContents setFormData={setFormData} />
              </div>
            </div>

            <div className={styles.btnWrap}>
              <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} onClick={handleCancel} />
              <Button type={'submit'} text={'확인'}  size={'btnL'} state={'success'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;