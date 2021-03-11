import React from "react";
import { Link } from "gatsby";

const PostLink2 = ({ post }) => (
  <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
    <div
      className=""
      style={{
        backgroundColor: "white",
        border: "1px solid #00000046",
        margin: "5px 10px",
        marginBottom: "5vh",
        overflow: "hidden"
      }}
    >
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          style={{
            backgroundImage: `url(${post.frontmatter.thumbnail})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <div className="et_left_img_news2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div
            className="et_left_cont_news"
            style={{
              textAlign: "left",
              width: "100%",
              border: "none",
              padding: "10px 5px"
            }}
          >
            <h4
              style={{
                marginTop: "15px"
              }}
            >
              {post.frontmatter.category}
            </h4>

            <Link to={post.frontmatter.path}>
              {" "}
              <h2
                style={{
                  marginTop: "15px",
                  fontSize: "24px",
                  fontWeight: "700"
                }}
              >
                {post.frontmatter.title}
              </h2>{" "}
            </Link>

            <h5>{post.frontmatter.date}</h5>

            <h2>
              <Link to={post.frontmatter.path}>Read More</Link>
              <i className="fa fa-angle-double-right" />
            </h2>

            <h5>Written By : {post.frontmatter.author}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PostLink2;
