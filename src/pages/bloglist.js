import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostLink from '../components/post-link'
import Navbar from '../components/navbar/navbar'
import blogStyles from '../styles/blogStyles.module.scss'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'
import Footer from '../components/footer'

const BlogList = ({
	data: {
		site,
		allMarkdownRemark: { edges },
	},
}) => {
	const [CategoryGiven, setCategoryGiven] = useQueryParam(
		'Category',
		StringParam
	)
	const [CurrentCategory, setCurrentCategory] = useState('all')
	useEffect(() => {
		console.log('category ', CategoryGiven)
		switch (CategoryGiven) {
			case 'justice':
				setCurrentCategory('Justice & Law')
				break
			case 'Politics':
				setCurrentCategory('Politics')
				break
			case 'Health':
				setCurrentCategory('Health')
				break
			case 'Economy':
				setCurrentCategory('Economy')
				break
			case 'Education':
				setCurrentCategory('Education')
				break
			case 'Arts':
				setCurrentCategory('Arts & Media')
				break
			case 'Environment':
				setCurrentCategory('Environment')
				break
			case 'Violence':
				setCurrentCategory('Violence & Harassment')
				break
			case 'Casteism':
				setCurrentCategory('Casteism')
				break
			case 'colorism':
				setCurrentCategory('Colorism & Racism')
				break
			case 'Sports':
				setCurrentCategory('Sports')
				break
			case 'Podcasts':
				setCurrentCategory('Podcasts')
				break
			case 'Opinion':
				setCurrentCategory('Opinions & Stories')
				break
			case 'Rendezvous':
				setCurrentCategory('Rendezvous')
				break

			default:
				setCurrentCategory('all')
		}

		return () => {
			console.log('Unmounted Category')
		}
	}, [CategoryGiven])

	// const Posts = edges
	//   .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
	//   .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return (
		<div>
			<Helmet>
				<title> {site.siteMetadata.title}</title>
			</Helmet>

			<Navbar />

			<div className={blogStyles.container}>
				<h2 className={blogStyles.heading}>{CurrentCategory} </h2>

				<div className={blogStyles.blogsContainer}>
					{edges.map((item) => {
						if (CurrentCategory === 'all') {
							return <PostLink key={item.node.id} post={item.node} />
						} else {
							if (item.node.frontmatter.category === CurrentCategory) {
								return <PostLink key={item.node.id} post={item.node} />
							}
						}
					})}

					{/* { CurrentCategory ==='all' && 
  edges.map((item)=>{
    
      console.log(item)
     return <PostLink key={item.node.id} post={item.node} />
    
  })
}
 */}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default BlogList

export const query = graphql`
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
						category
					}
				}
			}
		}
	}
`
