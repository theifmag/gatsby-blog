import React, {useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Spacer from '../atoms/Spacer';
import CategoryBlock from '../organisms/CategoryBlock';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import useWindowSize from '../functions/useWindowResize';

const ArticlesPage = (props) => {
  const name = props?.location?.state?.name;

  const [mobile] = useWindowSize();

  const data = useStaticQuery(graphql`
    query ArticlesPageQuery {
      allMarkdownRemark {
        nodes {
          timeToRead
          frontmatter {
            title
            category
            thumbnail
            author
            date(formatString: "MMM-YY")
            path
          }
          excerpt(format: PLAIN, truncate: true, pruneLength: 100)
        }
        distinct(field: frontmatter___category)
      }
    }
  `);

  const {nodes, distinct} = data.allMarkdownRemark;
  // distinct = array of categories
  // nodes = array of all articles
  const megaArrayOfCategories = distinct.sort().map((category) => {
    const articlesInThisCategory = nodes.filter(
      (article) => article?.frontmatter?.category === category,
    );
    return [category, articlesInThisCategory];
  });

  useEffect(() => {
    if (name) {
      const element = document.getElementById(name);
      setTimeout(() => {
        element?.scrollIntoView();
      }, 10);
    }
  }, [name]);

  return (
    <>
      <Header />
      <Spacer y={mobile ? 30 : 80} />
      {megaArrayOfCategories.map((category, key) => (
        <CategoryBlock category={category} key={key} />
      ))}
      <Footer />
    </>
  );
};

export default ArticlesPage;
