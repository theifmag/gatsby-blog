import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PostLink from '../post-link' ;
import PostLink2 from '../post-link2';


export default  function Latestblogcard () {
    return (
      <StaticQuery
        query={graphql`
         query headingQueryAndHeadingQuer {
            

            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 6) {
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
      
            <div style={{
                display : 'flex',
                flexDirection : 'row',
                overflowX : 'scroll'
            }}>
           

            {data.allMarkdownRemark.edges.map((item)=>{

              return  <PostLink2 key={item.node.id} post={item.node} />

            })}

       
</div>



        )}
      />
    )
  }


