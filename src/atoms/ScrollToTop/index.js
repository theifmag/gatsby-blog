import {StaticImage} from 'gatsby-plugin-image';
import React, {useEffect} from 'react';

import * as styles from './index.module.css';

const UP_ARROW = '../../images/banner/arrow-up.svg';

const ScrollToTop = () => {
  const onClick = () => {};

  useEffect(() => {
    // Get the button
    const mybutton = document.getElementById('myBtn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        mybutton.classList.add(styles.show);
      } else {
        mybutton.classList.remove(styles.show);
      }
    };
  }, []);

  return (
    // asdasd asdsdasd
    // asasd
    <button className={styles.button} id="myBtn" onClick={onClick}>
      <StaticImage src={UP_ARROW} alt="arrow" />
    </button>
  );
};

export default ScrollToTop;
