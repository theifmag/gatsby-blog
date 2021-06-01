import React from 'react';
import {Link} from 'gatsby';

import Spacer from '../../atoms/Spacer';

import styles from './index.module.css';

const PopularArticle = ({article}) => {
  const {excerpt, frontmatter} = article.node;
  const {title, path} = frontmatter;

  return (
    <article className={styles.container}>
      <Link to={path}>
        <h2 className={styles.title}>{title}</h2>
        <Spacer y={10} />
        <p className={styles.excerpt}>{excerpt}</p>
      </Link>
    </article>
  );
};

export default PopularArticle;
