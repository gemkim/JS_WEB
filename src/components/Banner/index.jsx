import React from 'react';

import styles from './Banner.module.scss'
import { Link } from 'react-router-dom';

const Banner = ({images}) => {
  return  (
    <ul className={styles.slides}>
      { images.map(({id, imgURL})=>(
        <li key={id}>
          <Link><img src={require(`asset/${imgURL}`)} alt={`배너이미지 ${id}`} /></Link>
        </li>
      ))}
    </ul>
  )
};

export default Banner;