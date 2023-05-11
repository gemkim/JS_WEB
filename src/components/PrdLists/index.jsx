import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PrdLists.module.scss'

const PrdLists = ({images}) => {
  return (
    <div className={styles.prdWrap}>
      <ul className={styles.lists}>
      { images.map(({id, imgURL})=>(
         <li>
          <Link to="">
            <img src={require(`asset/${imgURL}`)} alt={`배너이미지 ${id}`} />
          </Link>
          <div className={styles.details}>
            <p className={styles.title}>블랙라벨 시그니처 380N 레깅스 1+1</p>
            <p className={styles.price}>59,800 <span className={styles.before}>110,000</span></p>
            <div className={styles.desc}>
              <span className={styles.event}>[5/9(화) 2PM까지 기간한정특가!]</span>
              <p className={styles.text}>디스패치 선정 셀럽 선호 레깅스 1위!</p>
            </div>
          </div>
        </li>
        ))
      }
      </ul>
    </div>
  )
};

export default PrdLists;