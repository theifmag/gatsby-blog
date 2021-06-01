import React from 'react';

import Spacer from '../../atoms/Spacer';
import useWindowResize from '../../functions/useWindowResize';

import styles from './index.module.css';

const Title = ({text}) => {
  const [mobile] = useWindowResize();

  return (
    <div className={'flex-row'}>
      <h1 className={styles.title}>{text}</h1>
      {mobile || (
        <>
          <Spacer x={20} />
          <div className={styles.underline}></div>
        </>
      )}
    </div>
  );
};

export default Title;
