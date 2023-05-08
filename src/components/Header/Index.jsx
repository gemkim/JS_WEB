import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'
import GnbMenus from './GnbMenus';
import SubMenus from './SubMenus';

const Header = (props) => {
  const subNavbar = [
    {
      id: 1,
      category: '여성',
      link: '/woman',
      subMemu : [
        { id: '상의', list: '상의' },
        { id: '하의', list: '하의',},
        { id: '원피스', list: '원피스' },
        { id: '아우터', list: '아우터'}
      ]
    },
    {
      id: 2,
      category: '남성',
      link: '/man',
      subMemu : [
        { id: '상의', list: '상의' },
        { id: '하의', list: '하의',},
        { id: '아우터', list: '아우터'}
      ]
    },
    {
      id: 3,
      category: '키즈',
      link: '/kids',
      subMemu : [
        { id: '여아', list: '여아' },
        { id: '남아', list: '남아',},
      ]
    },
    {
      id: 4,
      category: '스포츠',
      link: '/sports',
      subMemu : [
        { id: '테니스', list: '테니스' },
        { id: '수영', list: '수영',},
        { id: '폴댄스', list: '폴댄스' },
      ]
    },
    {
      id: 5,
      category: '잡화',
      link: '/acc',
      subMemu : [
        { id: '신발', list: '신발' },
        { id: '악세사리', list: '악세사리',},
        { id: '가방', list: '가방' },
      ]
    },
  ];

  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>JS Shop</h1>
        <nav className={styles.nav}>
          { subNavbar.map( ({id, category, link} )  => (
            <GnbMenus key={id} category={category} link={link} />
          )) }
        </nav>
        <div className={styles.utils}>
          <ul>
            <li><Link>검색</Link></li>
            <li><Link>카트</Link></li>
            <li><Link>로그인</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;