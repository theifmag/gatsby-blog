import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Title from '../../atoms/Title';
import Spacer from '../../atoms/Spacer';
import LatestArticleCard from '../../molecules/LatestArticleCard';
import useWindowSize from '../../functions/useWindowResize';

import styles from './index.module.css';

const LatestArticlesSection = () => {
  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query LatestArticlesQuery {
      allMarkdownRemark(
        limit: 7
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 150)
            frontmatter {
              title
              path
              category
              author
              date(formatString: "MMM-yy")
              thumbnail
            }
            timeToRead
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges.map((i) => {
    return {
      ...i.node.frontmatter,
      id: i.node.id,
      excerpt: i.node.excerpt,
      timeToRead: i.node.timeToRead,
    };
  });

  return (
    <section className={styles.container}>
      <Title text="Latest articles" />
      <Spacer y={mobile ? 50 : 100} />
      <div className={styles.articlesContainer}>
        {articles.map((article, key) => (
          <LatestArticleCard index={key} article={article} key={key} />
        ))}
      </div>
      <Spacer y={mobile ? 50 : 100} />
    </section>
  );
};

export default LatestArticlesSection;
