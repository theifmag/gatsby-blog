import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styles from './index.module.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { site, markdownRemark } = data // data.markdownRemark holds your post data
	const { siteMetadata } = site
	const { frontmatter, html } = markdownRemark
	return (
		<>
			<Helmet>
				<title>
					{frontmatter.title} | {siteMetadata.title}
				</title>
				<meta name='description' content={frontmatter.metaDescription} />
			</Helmet>

			<Navbar />

			<div className={styles.container}>
				<article className='post'>
					<h1 className={styles.title}>{frontmatter.title}</h1>

					<img src={frontmatter.thumbnail} className={styles.thumbnailImage} />

					<div>
						<h5 className={styles.authorName}>{frontmatter.author}</h5>
						<h5 className={styles.articleDate}>{frontmatter.date}</h5>
					</div>

					<div
						className={styles.blogContent}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</article>
				<br />
				<br />
				<br />
				<Footer />
			</div>
		</>
	)
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
`
