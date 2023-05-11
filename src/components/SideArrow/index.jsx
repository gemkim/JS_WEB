import React from 'react';

import styles from './SideArrow.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SideArrow = (props) => {
  return (
    <div className={styles.arrows}>
      <button className={styles.prev}>
        <FontAwesomeIcon icon={faAngleLeft} /><span className='srOnly'>prev</span>
      </button>
      <button className={styles.next}>
        <FontAwesomeIcon icon={faAngleRight} /><span className='srOnly'>next</span>
      </button>
    </div>
  )
}

export default SideArrow;