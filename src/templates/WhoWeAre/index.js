import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import useWindowSize from '../../functions/useWindowResize';

import * as styles from './index.module.css';
import SocialImageLink from '../../atoms/SocialImageLink';

import FACEBOOK_LOGO from '../../images/social/facebook.svg';
import INSTAGRAM_LOGO from '../../images/social/instagram.svg';
import LINKEDIN_LOGO from '../../images/social/linkedin.svg';

const LOGO = '../../images/banner/intersectionality-logo.png';

const WhoWeAre = () => {
  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query MyStory {
      aboutJson {
        aboutOne
        aboutTwo
      }
      site {
        siteMetadata {
          socialLinks {
            linkedIn
            instagram
            facebook
          }
        }
      }
    }
  `);

  const {aboutOne, aboutTwo} = data?.aboutJson;

  const {linkedIn, instagram, facebook} = data.site.siteMetadata.socialLinks;

  return (
    <section className={styles.container}>
      <Spacer y={mobile ? 30 : 50} />
      <div className={styles.titleContainer}>
        <Title text="Our Story" />
        <div>
          <SocialImageLink
            src={FACEBOOK_LOGO}
            alt="Facebook logo"
            link={facebook}
          />
          <Spacer x={20} />
          <SocialImageLink
            src={INSTAGRAM_LOGO}
            alt="Instagram logo"
            link={instagram}
          />
          <Spacer x={20} />
          <SocialImageLink
            src={LINKEDIN_LOGO}
            alt="Linkedin logo"
            link={linkedIn}
          />
        </div>
      </div>
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
