import React, { useState } from 'react';

import styles from './OrderSheet.module.scss'
import OrderInfoForm from 'components/order/OrderInfoForm';
import PageTitle from 'components/commonLayout/PageTitle';
import Button from 'components/Button';

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
      
        <h3>주문상품 할인적용</h3>
        <table className={styles.payTable}>
          <caption className='sr-only'>주문상품 할인적용 리스트</caption>
          <colgroup>
              <col style={{width: 20 + '%'}} />
              <col style={{width: 20 + '%'}} />
              <col style={{width: 20 + '%'}} />
              <col style={{width: 20 + '%'}} />
              <col style={{width: 20 + '%'}} />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">상품금액</th>
              <th scope="col">배송비</th>
              <th scope="col">할인금액</th>
              <th scope="col">추가금액</th>
              <th scope="col">결제 예정금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className={styles.price}><strong>52,300</strong> 원</span>
              </td>
              <td>
                <span className={styles.delivery}><strong>무료</strong></span>
              </td>
              <td>
                <span className={styles.discount}><strong>0</strong></span>원
              </td>

              <td>
                <span className={styles.extra}><strong>0</strong></span>원
              </td>
              <td>
                <span className={styles.total}><strong>52,300</strong></span>원
              </td>
            </tr>
          </tbody>
        </table>
      
        <div className={styles.option}>
          <div className={styles.list}>
            <p className={styles.title}>쿠폰사용</p>
            <div className={styles.formList}>
              <input type="text" placeholder='쿠폰을 입력하세요' />
              <Button type={'submit'} text={'쿠폰선택'}  size={'btnL'} state={'success'} />
            </div>
          </div>
          <div className={styles.list}>
            <p className={styles.title}>제휴 포인트 사용</p>
            <div className={styles.formList}>
              <input type="text" placeholder='0' />
              <Button type={'submit'} text={'사용'}  size={'btnL'} state={'success'} />
            </div>
          </div>
        </div>


        <h3>주문상품 할인적용</h3>
        <div className={styles.option}>
          <div className={styles.list}>
            <p className={styles.title}>결제방법</p>
            <div className={styles.formList}>
              <ul className={styles.paySort}>
                <li>
                  <input type="radio" id="payM" name="drone" value="payM" checked />
                  <label htmlFor="payM">휴대폰 결제</label>
                </li>
                <li>
                    <input type="radio" id="payRealTime" name="drone" value="payRealTime" checked />
                    <label htmlFor="payRealTime">실시간 계좌이체</label>
                </li>
                <li>
                    <input type="radio" id="credit" name="drone" value="credit" checked />
                    <label htmlFor="credit">신용카드</label>
                </li>
                <li>
                    <input type="radio" id="credit1" name="drone" value="credit1" checked />
                    <label htmlFor="credit1">신용카드</label>
                </li>
                <li>
                    <input type="radio" id="credit2" name="drone" value="credit2" checked />
                    <label htmlFor="credit2">신용카드</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3>주문자 동의</h3>
        <div className={styles.option}>
          <div className={styles.list}>
            <p className={styles.title}>개인정보 수집·이용</p>
            <div className={styles.formList}>
              <table>
                <thead>
                  <tr>
                    <th>목적</th>
                    <th>항목</th>
                    <th>보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.list}>
            <p className={styles.title}>주문동의</p>
            <div className={styles.formList}>
                <input type="radio" id="agree" name="drone" value="agree" checked />
                <label htmlFor="agree">상기 약관 및 개인정보 수집 · 이용에 대한 동의 내용과 결제정보를 확인하였으므로 구매진행에 동의합니다.</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default OrderSheet;