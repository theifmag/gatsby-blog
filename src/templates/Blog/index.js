import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import Title from '../../atoms/Title'
import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'
import AsideContainer from '../../molecules/AsideContainer'

import styles from './index.module.css'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { site, markdownRemark } = data // data.markdownRemark holds your post data
	const { siteMetadata } = site
	const { frontmatter, html } = markdownRemark

	const [mobile] = useWindowResize()

	return (
		<>
			<Helmet>
				<title>
					{frontmatter.title} | {siteMetadata.title}
				</title>
				<meta name='description' content={frontmatter.metaDescription} />
			</Helmet>

			<Header />

			<div className={styles.container}>
				<article>
					<Spacer y={mobile ? 20 : 100} />
					<Title text={frontmatter.title} />
					<Spacer y={mobile ? 20 : 80} />
					<img src={frontmatter.thumbnail} className={styles.thumbnailImage} />
					<Spacer y={20} />
					<div>
						<h5 className={styles.authorName}>{frontmatter.author}</h5>
						<h5 className={styles.articleDate}>{frontmatter.date}</h5>
					</div>
					<Spacer y={50} />
					<div className='flex-row'>
						<div
							className={styles.blogContent}
							dangerouslySetInnerHTML={{ __html: html }}
						/>
						<AsideContainer category={frontmatter.category} />
					</div>
					<Spacer y={150} />
				</article>
			</div>
			<Footer />
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
				category
			}
		}
	}
`
