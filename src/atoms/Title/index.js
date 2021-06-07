import React from 'react';

import Spacer from '../Spacer';
import useWindowResize from '../../functions/useWindowResize';

import * as styles from './index.module.css';

const Title = ({text, removeThatLineBro, primary}) => {
  const [mobile] = useWindowResize();

  return (
    <div className="flex-row">
      <h1 className={styles.title}>{text}</h1>
      {mobile || removeThatLineBro || (
        <>
          <Spacer x={20} />
          <div
            className={styles.underline}
            style={primary && {backgroundColor: 'var(--color-primary)'}}
          />
        </>
      )}
    </div>
  );
};

export default Title;
