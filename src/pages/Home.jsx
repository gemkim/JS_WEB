import React from 'react';

import styles from './Home.module.scss'
//components
import Banner from 'components/Banner';
import SideArrow from 'components/SideArrow';
import PrdLists from 'components/PrdLists';
import TabMenus from 'components/TabMenus';

// import test from 'asset/images/banner_01.jpg'

const Home = (props) => {
  const images = [
    {id: 1, imgURL: 'images/banner_01.jpg'},
    {id: 2, imgURL: 'images/banner_02.jpg'},
    {id: 3, imgURL: 'images/banner_03.jpg'}
  ]
  return (
    <div className={styles.main}>
      <section className={styles.imageBanner}>
        <Banner images={images} />
        <div className={styles.btnArrows}>
          <SideArrow />
        </div>
      </section>
      <section className={styles.tabWrap}>
        <div className={styles.tabLeft}>
          <TabMenus />
        </div>
        <div className={styles.tabRight}>
          <PrdLists />
        </div>
      </section>
      <section className={styles.newPrd}>
        <h2 className={styles.title}>New Arrived</h2>
        <div className={styles.prd}>
          <PrdLists />
        </div>
      </section>
    </div>
  )
};

export default Home;