import React from "react"
import { Link } from "gatsby"
import blogStyles from "../styles/blogStyles.module.scss"

const PostLink = ({ post }) => (



//   <article className={blogStyles.blogcard}>
//  <div className={blogStyles.blogimage}>
//       <Link to={post.frontmatter.path}>
//         {!!post.frontmatter.thumbnail && (
//           <img
//             src={post.frontmatter.thumbnail}
//             alt={post.frontmatter.title + "- Featured Shot"}
//             className={blogStyles.blogimage}
//           />
//         )}
//       </Link>
//     </div>
//     <header className={blogStyles.blogtext}>
//       <h2 className={blogStyles.linktag} >
//         <Link to={post.frontmatter.path} >
//           {post.frontmatter.title}
//         </Link>
//       </h2>
//       <div className={blogStyles.blogsubtext}>
//         <div className={blogStyles.subtextDiv}>
//           <h5>{post.frontmatter.date} </h5>
//         </div>
//         <div className={blogStyles.subtextDiv}>
//           <h5>By : {post.frontmatter.author}</h5>
//         </div>
//       </div>
//     </header> 
//   </article>

<div>





          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 " style={{
            maxWidth : '45vw',
            display : 'inline-block'
          }}>
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay"  
                    style={{
                      backgroundImage: `url(${post.frontmatter.thumbnail})`,
                      backgroundSize : 'contain'
                    }}
                    />
                   
                   {/* <img src={post.frontmatter.thumbnail} 
                   style={{
                     objectFit : 'cover',
                    height : '100%',
                    width : '100%'
                   }}/> */}
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                        
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* <h4>29-Jan-2019</h4> */}
                      </div>
                   
                  </div>
                  <div className="et_left_cont_news" style={{
                    textAlign : 'left',
                    
                  }}>
                    <h4>News</h4>
                  <h2 >{post.frontmatter.title}</h2>
                    <h5>{post.frontmatter.date}</h5>
                    
                    <h2>
                      <Link to={post.frontmatter.path}>Read More</Link>
                      <i className="fa fa-angle-double-right" />
                    </h2>
                  </div>
                </div>
              </div>








</div>

);
export default PostLink
