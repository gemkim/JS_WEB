import React from 'react';

import styles from './Home.module.scss'
//components
import PrdLists from 'components/PrdLists';
import TabMenus from 'components/TabMenus';
import SlideBanner from 'components/SlideBanner';

// import test from 'asset/images/banner_01.jpg'

const Home = (props) => {
  const bannerImages = [
    {id: 1, imgURL: 'images/banner_01.jpg'},
    {id: 2, imgURL: 'images/banner_02.jpg'},
    {id: 3, imgURL: 'images/banner_03.jpg'}
  ]
  const prdImages = [
    {id: 1, imgURL: 'images/prd_01.jpg'},
    {id: 2, imgURL: 'images/prd_02.jpg'},
    {id: 3, imgURL: 'images/prd_03.jpg'},
    {id: 4, imgURL: 'images/prd_04.jpg'}
  ]
  return (
    <div className={styles.main}>
      <section className={styles.mainBanner}>
        <SlideBanner images={bannerImages} />
      </section>
      <section className={styles.tabWrap}>
        <div className={styles.container}>
          <div className={styles.tabLeft}>
            <TabMenus />
          </div>
          <div className={styles.tabRight}>
            <PrdLists images={prdImages} />
          </div>
        </div>
      </section>
      <section className={styles.newPrd}>
        <h2 className={styles.title}>New Arrived</h2>
        <div className={styles.container}>
          <PrdLists images={prdImages} />
        </div>
      </section>
    </div>
  )
};

export default Home;