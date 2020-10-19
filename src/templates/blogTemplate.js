import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blogTemplate.css";
import Navbar from "../components/navbar/navbar";
import Footer from '../components/footer'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
          
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>

      <Navbar />

      <div className="blog-post-container  ">
        <article className="post">
          {/* {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )} */}

          <div>
          
          <h3 className="post-title-main">{frontmatter.title}</h3>
            <div className="data-div">
           
              <div className="author-container">
                <h5 className="content">{frontmatter.author}</h5>
                <h5 className="content">{frontmatter.date}</h5>
              </div>

              <div className="social-container">
              <h5 style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <a
                      href="https://www.facebook.com/theifmag" target="_blank"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-facebook" />
                      </a>

                 

                      <a
                         href="https://www.linkedin.com/company/theifmag"
                         target="_blank"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                      </a>

                      <a
                        href="https://www.instagram.com/theifmag/" target="_blank"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </h5>

              </div>
            </div>
          </div> 

          <div
            className="post-thumbnail"
            style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
          ></div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <br/>
      <br/>
      <br/>
      <br/>

        <Footer />
      </div>
      

    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        author
      }
    }
  }
`;
