import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import Navbar from "../components/navbar/navbar";
import blogStyles from "../styles/blogStyles.module.scss";

const BlogList = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <Navbar />

      <div className={blogStyles.container}>
        <h2 className={blogStyles.heading}>Blog Posts &darr;</h2>


        
        <div className={blogStyles.blogsContainer}>{Posts}</div>
      </div>
    </div>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            author
            
          }
        }
      }
    }
  }
`;
