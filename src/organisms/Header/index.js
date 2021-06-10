import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import NavBar from '../../molecules/NavBar';
import useWindowResize from '../../functions/useWindowResize';
import ScrollToTop from '../../atoms/ScrollToTop';

import * as styles from './index.module.css';

import LOGO from '../../images/banner/logo.svg';

const SEARCH = '../../images/banner/search.svg';

const Header = ({noSearch}) => {
  const [mobile] = useWindowResize();

  return (
    <>
      {mobile || <ScrollToTop />}
      <header className={styles.container}>
        <Link to="/">
          <div className="flex-row-space-between">
            <img src={LOGO} className={styles.logo} alt="The If mag Logo" />
            <Spacer x={mobile ? 5 : 20} />
            <span>The</span>
            <h1 className={styles.title}>Intersectional Feminist</h1>
          </div>
        </Link>
        <div className="flex-row-space-between">
          {mobile || <NavBar />}
          {mobile || <Spacer x={40} />}
          {noSearch || (
            <Link to="/search">
              <StaticImage
                loading="eager"
                objectFit="contain"
                className={styles.searchIcon}
                src={SEARCH}
                alt="search"
              />
            </Link>
          )}
        </div>
      </header>
      {mobile && <NavBar />}
    </>
  );
};

export default Header;
