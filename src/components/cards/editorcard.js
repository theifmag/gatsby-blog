import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PostLink from "../post-link";
import PostLink2 from "../post-link2";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

export default function Editorcard() {
  return (
    <StaticQuery
      query={graphql`
        query editorCardQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 6
          ) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  thumbnail
                  author
                  category
                  EditorChoice
                }
              }
            }
          }
        }
      `}
      render={data => (
        <center>
          <div className="container">
            <div>
              <Slider {...settings}>
                {/* {
         console.log(data.allMarkdownRemark.edges)
     } */}

                {data.allMarkdownRemark.edges.map(item => {
                  if (item.node.frontmatter.EditorChoice) {
                    return (
                      <div>
                        {" "}
                        <PostLink2 key={item.node.id} post={item.node} />
                      </div>
                    );
                  }
                })}
              </Slider>
            </div>
          </div>
        </center>
      )}
    />
  );
}
