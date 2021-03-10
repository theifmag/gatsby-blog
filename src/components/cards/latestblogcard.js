import React from "react";
import { StaticQuery, graphql } from "gatsby";
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

export default function Latestblogcard() {
  return (
    <StaticQuery
      query={graphql`
        query headingQueryAndHeadingQuer {
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
                }
              }
            }
          }
        }
      `}
      render={data => (
        //           <Slider {...settings}>
        //             <div>

        //             {data.allMarkdownRemark.edges.map((item)=>{

        //               return  <PostLink2 key={item.node.id} post={item.node} />

        //             })}

        // </div>
        // </Slider>
        <center>
          <div className="container">
            <div>
              <Slider {...settings}>
                {data.allMarkdownRemark.edges.map(item => {
                  return <PostLink2 key={item.node.id} post={item.node} />;
                })}
              </Slider>
            </div>
          </div>
        </center>
      )}
    />
  );
}
