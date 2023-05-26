import React from 'react';
import styles from './Form.module.scss'
import Button from 'components/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const AddressForm = ({address, setAddress, zoneCode, setZoneCode}) => {

  const open = useDaumPostcodePopup();
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let zonecode = data.zonecode

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setZoneCode(zonecode)
    setAddress(fullAddress)
    // console.log(scriptUrl); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  
  const handleOpenPopup = (e) => {
    open({ onComplete: handleComplete });
  }

  const onChangeUserAddress = (e) => {
  };
  
  return (
    <div className={styles.address}>
      <div className={styles.zonecode}>
        <input type="text" defaultValue={zoneCode} disabled />
        <Button type={'button'} text={'주소'} size={'btnM'} state={'white'} onClick={handleOpenPopup} />
      </div>
      <input 
        className={styles.textform} 
        id="input1" 
        type='text' 
        placeholder='주소'
        value={address}
        onChange={onChangeUserAddress}
      />
      <input className={styles.textform}  type="text" placeholder='나머지 주소' />
    </div>
  )
};

export default AddressForm;