import React from 'react';
import TableSheet from 'components/TableSheet';

import styles from './OrderSheet.module.scss'

const OrderSheet = (props) => {

  const userInfo = {
    name : {
      type: '이름',
      value : 'mj'
    },
    email : {
      type: '이메일',
      value : 'mj@naver.com',
    },
    userPhone : {
      type: '연락처',
      value : '01012345678'
    },
    address : {
      type: '주소',
      zonecode : '02678',
      address1 : '서울 강남구',
      address2 : '101호',
    },

    userMessage : {
      type: '배송메세지',
      value : '-'
    },
  }

  return(
    <div className={styles.orderSheetWrap}>
      <div className={styles.container}>
      <form action="">
        <h3>주문자 정보</h3>
        <div>
          <caption>결제 정보</caption>
          <TableSheet tableData={userInfo} />
        </div>
      
        {/* <div className={styles.totalPay}>
          <table>
            <thead>
              <tr>
                <td>상품금액</td>
              </tr>
              <tr>
                <td>배송비</td>
              </tr>
              <tr>
                <td>할인금액</td>
              </tr>
              <tr>
                <td>추가금액</td>
              </tr>
              <tr>
                <td>결제 예정금액</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>쿠폰 사용</td>
                <td>
                  쿠폰선택
                </td>
              </tr>
              <tr>
                <td>제휴 포인트 사용</td>
                <td>캐시백 ~~사용</td>
              </tr>
            </tbody>
          </table>
        </div>
  */}
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
      
      </form>
      </div>
    </div>
  )
};

export default OrderSheet;