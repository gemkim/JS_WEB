import React, { useEffect, useState } from 'react';

import styles from './Order.module.scss'

import PageTitle from 'components/commonLayout/PageTitle';
import Button from 'components/Button';
import TableFormLists from 'components/order/TableFormLists';
import OrderInfoForm from 'components/order/OrderInfoForm';
import ModalPopup from 'components/modal/ModalPopup';

const OderForm = (props) => {
  const [formData, setFormData] = useState({
    memberName : "test1",
    phone : "01076885412",
    email : "testmem@naver.com",
    address1 : "경남 거창군 위천면 강남불1길 18",
    address2 : "논현동 101호",
    zipCode : "12305",
  })
  const [data, setData] = useState([
    {
    id : "325445747",
    prdName : "이스페더 11111111",
    options: [
      {
      name: "블랙 M",
      count : 1,
      price: 3000
    },
    {
      name: "블루 S",
      count : 2,
      price: 3000
    },
  ],
    count: 1,
    deliveryFee: 3000,
    beforePrice : "85400",
    price : "51200",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  },
  {
    id : "4634574",
    prdName : "test 2222222222 1+1",
    options: [
      {
        name: "test M",
        count : 1,
        price: 3000
      },
      {
        name: "test S",
        count : 2,
        price: 3000
      },
    ],
    count: 3,
    deliveryFee: 3000,
    beforePrice : "53400",
    price : "25400",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  }])

  const [isPopup, setIsPopup] = useState(false)

  useEffect(() => {
    console.log(data);
  },[data])
  const handleToggle = (e) => {
    const target = e.target
    target.parentNode.classList.toggle(styles.actived)
  }
  const openPopup = (e) => {
    setIsPopup(true)
  }

  const handleIncrement = (list) =>{
    const updatedData = data.map(item => {
      if(item.id === list.id){
        const count = item.count + 1;
        return { ...list, count};
      }
      return item;
    })
    setData(updatedData);
  }

  // const handleIncrement = (list) => {
  //  const test = data.map( item => {
  //     if(item.id === list.id ){
  //       const count = list.count + 1
  //       setData([...data, { ...list, count : count < 1 ? 1 : count }])
  //     }
  //   })
  //   console.log(test);
  // }

  const handleDecrement = e => {
    console.log('감소');
  }

  const handleCancel = (e) => {
    console.alert('취소할꺼냐아아아');
  }
  const handlePay = (e) => {
    alert('결제완료 되었습니다.')
  }
  return (
    <div className={styles.orderWrap}>
      <PageTitle title={'주문서'} />
      <div className={styles.container}>
        <div className={styles.orderLists}>
          <fieldset>
            <legend className='sr-only'>주문 폼</legend>
            <div className={styles.tableScrollable}>
              <table className={styles.tbBoard}>
                <caption className='sr-only'>주문리스트</caption>
                <colgroup>
                  <col style={{width: 4 + '%'}} />
                  <col />
                  <col style={{width: 12 + '%'}} />
                  <col style={{width: 10 + '%'}} />
                  <col style={{width: 12 + '%'}} />
                  <col style={{width: 8 + '%'}} />
                  <col style={{width: 10 + '%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <div className={styles.checkAll}>
                        <input type='checkbox' className='select' onChange={null} /><span className="sr-only">선택</span>
                      </div>
                    </th>
                    <th scope="col"><span>상품명</span></th>
                    <th scope="col"><span>가격</span></th>
                    <th scope="col"><span>수량</span></th>
                    <th scope="col"><span>합계</span></th>
                    <th scope="col"><span>적립금</span></th>
                    <th scope="col"><span>배송비</span></th>
                  </tr>
                </thead>
                <tbody>
                  { data.map( ( item ) => (
                    <TableFormLists 
                      key={item.id} item={item} options={item.options}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      handleOpenPopup={openPopup}
                    />
                  ))}

                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className={styles.total}><span>합계</span></td>
                    <td colSpan={2} className={styles.totalPrice}><span>53,000원</span></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </fieldset>
        </div>
        <div className={styles.orderInfo}>
          <h3>주문자 정보</h3>
          <OrderInfoForm formData={formData} setFormData={setFormData} />
        </div>

        <h3>주문상품 할인적용</h3>
  
        <dl className={styles.divList}>
          <dt>쿠폰사용</dt>
          <dd>
            <div className={styles.formWrap}>
              <input type="text" placeholder='쿠폰을 입력하세요' />
              <Button type={'submit'} text={'쿠폰선택'}  size={'btnM'} state={'success'} onClick={openPopup} />
            </div>
          </dd>
          <dt>제휴 포인트 사용</dt>
          <dd>
            <div className={styles.formWrap}>
              <input type="text" placeholder='0' />
              <Button type={'submit'} text={'사용'}  size={'btnM'} state={'success'} />
            </div>
          </dd>
        </dl>

        <table className={`${styles.uiTable} ${styles.tbStyle01}`}>
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
              <td className='center'>
                <span className={styles.price}>
                  <strong>52,300</strong> 원
                </span>
              </td>
              <td className='center'>
                <span className={styles.delivery}>
                  <strong>무료</strong>
                </span>
              </td>
              <td className='center'>
                <span className={styles.discount}>
                  <strong>0</strong>원
                </span>
              </td>
              <td className='center'>
                <span className={styles.extra}>
                  <strong>0</strong>원
                </span>
              </td>
              <td className='center'>
                <span className={styles.total}>
                  <strong>52,300</strong>원
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>결제 수단</h3>
        <div className={styles.toggleWrap}>
          <div className={`${styles.toggleBody} ${styles.actived}`}>
            <div className={styles.toggleTitle} onClick={handleToggle}>
              일반 결제
            </div>
            <div className={styles.expandable}>
              <dl className={styles.divList}>
                <dt>카드구분</dt>
                <dd>
                  <div className={styles.formWrap}>
                    <input type="radio" id="credit1" name="drone" value="credit1" onChange={null} />
                    <label htmlFor="credit1">개인카드</label>
                    <input type="radio" id="credit1" name="drone" value="credit1" onChange={null} />
                    <label htmlFor="credit1">법인카드</label>
                  </div>
                </dd>

                <dt>카드선택</dt>
                <dd>
                  <select title="카드종류" id="card_li" name="" className="">
                    <option className="" value="">선택해주세요.</option>
                    <option value="C3">KB Pay(국민)</option>
                    <option value="C1">비씨</option>
                    <option value="C0">신한</option>
                    <option value="CH">현대</option>
                    <option value="C7">삼성</option>
                    <option value="C5">롯데</option>
                    <option value="C4">NH</option>
                    <option value="CF">하나</option>
                    <option value="CB">우리</option>
                    <option value="CP">카카오뱅크</option>
                    <option value="CQ">케이뱅크</option>
                  </select>
                </dd>

                <dt>할부기간</dt>
                <dd>
                  <select title="할부" id="monthGeneralPay" name="" className="">
                    <option value="01">일시불</option>
                    <option value="02">2개월  무이자</option>
                    <option value="03">3개월  무이자</option>
                    <option value="04">4개월</option>
                    <option value="05">5개월</option>
                    <option value="06">6개월</option>
                    <option value="07">7개월</option>
                    <option value="08">8개월</option>
                    <option value="09">9개월</option>
                    <option value="10">10개월</option>
                    <option value="11">11개월</option>
                    <option value="12">12개월</option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
          <div className={styles.toggleBody}>
            <div className={styles.toggleTitle} onClick={handleToggle}>
              카드 결제
            </div>
            <div className={styles.expandable}>
              test<br />
              test<br />
              test<br />
              test<br />
            </div>
          </div>
        </div>

        <div className={styles.btnWrap}>
          <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} onClick={handleCancel} />
          <Button type={'submit'} text={'결제하기'}  size={'btnL'} state={'success'} onClick={handlePay} />
        </div>


        { isPopup && <ModalPopup isPopup={isPopup} setIsPopup={setIsPopup} /> }
      </div>
    </div>
  )
};

export default OderForm;