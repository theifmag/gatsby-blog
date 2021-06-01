import {Link} from 'gatsby';
import React from 'react';

import Button from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';

import styles from './index.module.css';

const HeroText = () => {
  const [mobile, tablet] = useWindowResize();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        If you see inequality as a “them” problem or “unfortunate other”
        problem, that is a problem
      </h1>
      <Spacer y={mobile ? 10 : tablet ? 15 : 20} />
      <span className={styles.author}>-Kimberlee Crenshaw</span>
      <Spacer y={mobile ? 20 : tablet ? 30 : 50} />

      <Link to="/about">
        <Button text="find out more" />
      </Link>
    </div>
  );
};

export default HeroText;
