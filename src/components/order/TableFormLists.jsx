import React from 'react';
import styles from './TableFormLists.module.scss'
import { Link } from 'react-router-dom';
import OptionList from './OptionList';

const TableFormLists = ({item, options, onDecrement, onIncrement, handleOpenPopup}) => {
  const {id, prdName, beforePrice, price, imgURL, count, deliveryFee} = item
  const sumPrice = price * count
  // const {option1, option2, option3} = options

  const optionList = options.map( item => item )

  const totalPrice = options.reduce((accumulator, currentOption) => {
    return accumulator + (currentOption.price * currentOption.count);
  }, 0);
  console.log(totalPrice);


  return (
    <tr key={id}>
      {/* 체크 */}
      <td className={styles.check}>
        <div className={styles.checkBox}>
          <label htmlFor="chk1">
            <input type="checkbox" id="chk1" onChange={null} /><span className='sr-only'>선택하기</span>
          </label>
        </div>
      </td>
      {/* 상품명 */}
      <td className={styles.prd}>
        <Link to="#" className={styles.prdLink}>
          <span className={styles.thumb}>
            <img src={imgURL} alt={`${prdName} 제품`} />
          </span>
          <div className={styles.textBox}>
            <p className={styles.title}>{prdName}</p>
            <div className={styles.option}>
              {
                optionList.map( (item, idx) => (
                  <OptionList key={item.name} item={item} idx={idx} />
                ))
              }
            </div>
            <button 
              type='button' className={styles.btnDefault}
              onClick={handleOpenPopup}
            >옵션변경</button>
          </div>
        </Link>
      </td>
      {/* 가격 */}
      <td className={styles.price}>
        <div>
          <span className={styles.before}>{beforePrice}원</span>
          <span className={styles.current}>{price}원</span>
        </div>
      </td>
      {/* 수량 */}
      <td className={styles.count}>
        <div className={styles.countBox}>
          <div className={styles.editCount}> 
            <input type="text" name="amount" value={count} readOnly /><span className='sr-only'>{count}개</span>
            <button type="button" className={styles.down} onClick={ e => onDecrement(item)}><span className='sr-only'>감소</span></button> 
            <button type="button" className={styles.up} onClick={ e => onIncrement(item)}><span className='sr-only'>증가</span></button>
          </div>
        </div>
      </td> 
      {/* 합계 */}
      <td className={styles.sum}>
        <div>{sumPrice}원</div>
      </td>
      {/* 적립금 */}
      <td className={styles.point}>
        {sumPrice * 0.005} P
      </td>
      {/* 배송비 */}
      <td className={styles.delivery}>
        <p className={styles.text}>
          {deliveryFee}원
        </p>
      </td>
    </tr>
  )
};

export default TableFormLists;