import React from "react"
import { Link } from "gatsby"
import blogStyles from "../styles/blogStyles.module.scss"

const PostLink = ({ post }) => (
  <article className={blogStyles.blogcard}>
    <div className={blogStyles.blogimage}>
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + "- Featured Shot"}
            className={blogStyles.blogimage}
          />
        )}
      </Link>
    </div>

    <header className={blogStyles.blogtext}>

      <h2 className={blogStyles.linktag} >
        <Link to={post.frontmatter.path} >
          {post.frontmatter.title}
        </Link>
      </h2>


      <div className={blogStyles.blogsubtext}>
        <div className={blogStyles.subtextDiv}>
          <h5>{post.frontmatter.date} </h5>
        </div>
        <div className={blogStyles.subtextDiv}>
          <h5>By : {post.frontmatter.author}</h5>
        </div>
      </div>
    </header>
  </article>
);
export default PostLink
