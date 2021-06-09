import React, {useState} from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import NavBar from '../../molecules/NavBar';
import useWindowResize from '../../functions/useWindowResize';
import Search from '../Search';
import ScrollToTop from '../../atoms/ScrollToTop';

import * as styles from './index.module.css';

const LOGO = '../../images/banner/logo.svg';
const SEARCH = '../../images/banner/search.svg';

const Header = () => {
  const [mobile] = useWindowResize();
  const [search, setSearch] = useState(false);

  if (search) {
    return (
      <header className={styles.container}>
        <Search setSearch={setSearch} />
      </header>
    );
  }

  return (
    <>
      {mobile || <ScrollToTop />}
      <header className={styles.container}>
        <Link to="/">
          <div className="flex-row-space-between">
            <StaticImage
              loading="eager"
              objectFit="contain"
              className={styles.logo}
              src={LOGO}
              alt="logo"
            />
            <Spacer x={mobile ? 10 : 20} />
            <h1 className={styles.title}>the intersectional feminist</h1>
          </div>
        </Link>
        <div className="flex-row-space-between">
          {mobile || <NavBar />}
          {mobile || <Spacer x={40} />}
          <StaticImage
            onClick={() => setSearch(true)}
            loading="eager"
            objectFit="contain"
            className={styles.searchIcon}
            src={SEARCH}
            alt="search"
          />
        </div>
      </header>
      {mobile && <NavBar />}
    </>
  );
};

export default Header;
