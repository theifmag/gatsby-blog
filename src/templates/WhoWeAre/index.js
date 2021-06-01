import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import useWindowSize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const LOGO = '../../images/banner/intersectionality-logo.png';

const WhoWeAre = () => {
  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query MyStory {
      aboutJson {
        aboutOne
        aboutTwo
      }
    }
  `);

  const {aboutOne, aboutTwo} = data?.aboutJson;

  return (
    <section className={styles.container}>
      <Spacer y={mobile ? 30 : 50} />
      <Title text="Our Story" />
      <Spacer y={mobile ? 50 : 80} />
      <div className={mobile ? styles.mobileContainer : 'flex-row'}>
        <div>
          {mobile && <Spacer y={40} />}
          <p className={styles.aboutText}>{aboutOne}</p>
          <Spacer y={10} />
          <p className={styles.aboutText}>{aboutTwo}</p>
          <Spacer y={40} />
          <Link to="/about">
            <Button text="read our story" />
          </Link>
        </div>
        <StaticImage
          src={LOGO}
          className={styles.image}
          objectFit="contain"
          alt="intersectionality logo"
        />
      </div>
      <Spacer y={mobile ? 50 : 80} />
    </section>
  );
};

export default WhoWeAre;
