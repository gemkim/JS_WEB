import React, { useState } from 'react';

import styles from './OrderSheet.module.scss'
import OrderInfoForm from 'components/order/OrderInfoForm';
import PageTitle from 'components/commonLayout/PageTitle';

const OrderSheet = (props) => {

  const [formData, setFormData] = useState( {
    memberName : "test1",
    phone : "01076885412",
    email : "testmem@naver.com",
    address1 : "경남 거창군 위천면 강남불1길 18",
    address2 : "논현동 101호",
    zipCode : "12305",
  })

  return(
    <div className={styles.orderSheetWrap}>
      <div className={styles.container}>
        <PageTitle title={'주문자 정보'} />
        <OrderInfoForm formData={formData} setFormData={setFormData} />
      
        <div className={styles.payway}>
          <h3>결제 정보</h3>
          <table className={styles.tbSheet}>
            <tbody>
              <tr>
                <th>결제방법</th>
                <td>
                  <ul className={styles.paySort}>
                    <li>
                      <label htmlFor="payM">
                        <input type="radio" id="payM" name="drone" value="payM" checked />
                        휴대폰 결제
                      </label>
                    </li>
                    <li>
                      <label htmlFor="payRealTime">
                        <input type="radio" id="payRealTime" name="drone" value="payRealTime" checked />
                        실시간 계좌이체
                      </label>
                    </li>
                    <li>
                      <label htmlFor="credit">
                        <input type="radio" id="credit" name="drone" value="credit" checked />
                        신용카드
                      </label>
                    </li>
                    <li>
                      <label htmlFor="credit1">
                        <input type="radio" id="credit1" name="drone" value="credit1" checked />
                        신용카드
                      </label>
                    </li>
                    <li>
                      <label htmlFor="credit2">
                        <input type="radio" id="credit2" name="drone" value="credit2" checked />
                        신용카드
                      </label>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default OrderSheet;