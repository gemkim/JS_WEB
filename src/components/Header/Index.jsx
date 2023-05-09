import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'
import GnbMenus from './GnbMenus';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Logo from 'components/Logo';

const Header = (props) => {
  const subNavbar = [
    {
      id: 1,
      category: '여성',
      link: '/woman',
      subMenu : [
        { id: '상의', menu: '상의' },
        { id: '하의', menu: '하의',},
        { id: '원피스', menu: '원피스' },
        { id: '아우터', menu: '아우터'}
      ]
    },
    {
      id: 2,
      category: '남성',
      link: '/man',
      subMenu : [
        { id: '상의', menu: '상의' },
        { id: '하의', menu: '하의',},
        { id: '아우터', menu: '아우터'}
      ]
    },
    {
      id: 3,
      category: '키즈',
      link: '/kids',
      subMenu : [
        { id: '여아', menu: '여아' },
        { id: '남아', menu: '남아',},
      ]
    },
    {
      id: 4,
      category: '스포츠',
      link: '/sports',
      subMenu : [
        { id: '테니스', menu: '테니스' },
        { id: '수영', menu: '수영',},
        { id: '폴댄스', menu: '폴댄스' },
      ]
    },
    {
      id: 5,
      category: '잡화',
      link: '/acc',
      subMenu : [
        { id: '신발', menu: '신발' },
        { id: '악세사리', menu: '악세사리',},
        { id: '가방', menu: '가방' },
      ]
    },
  ];

  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <h1><Logo color={'#333'}/></h1>
        <nav className={styles.nav}>
          <ul className={styles.gnb}>
            { subNavbar.map( ({id, category, link, subMenu} )  => (
              <GnbMenus key={id} category={category} link={link} subMenu={subMenu} />
            ))}
          </ul>
          <div className={styles.lnbBg}></div>
        </nav>
        <div className={styles.utilWrap}>
          <ul className={styles.util}>
            <li><button><FontAwesomeIcon icon={faMagnifyingGlass} /><span className='ir'>검색</span></button></li>
            <li><Link to="cart"><FontAwesomeIcon icon={faCartShopping} /><span className='ir'>카트</span></Link></li>
            <li><Link to="/login"><FontAwesomeIcon icon={faPowerOff} /><span className='ir'>로그인</span></Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;