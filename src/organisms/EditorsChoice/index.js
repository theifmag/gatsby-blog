import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import useWindowSize from '../../functions/useWindowResize'
import ArticleCard from '../../molecules/ArticleCard'

import styles from './index.module.css'

const EditorsChoiceSection = () => {
	const [mobile] = useWindowSize()

	const data = useStaticQuery(graphql`
		query EditorsChoiceQuery {
			allMarkdownRemark(
				limit: 3
				filter: { frontmatter: { EditorChoice: { eq: true } } }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 100)
						frontmatter {
							title
							path
							category
							author
							thumbnail
							date(formatString: "MMM-YY")
						}
						timeToRead
					}
				}
			}
		}
	`)

	const articles = data.allMarkdownRemark.edges.map((i) => i.node)

	return (
		<section className={styles.container}>
			<Spacer y={50} />
			<Title text='Editor&#39;s Choice' />
			<Spacer y={mobile ? 30 : 100} />
			<div className={styles.articleContainer}>
				{articles.map((article, key) => (
					<ArticleCard article={article} key={key} />
				))}
			</div>
			<Spacer y={100} />
		</section>
	)
}

export default EditorsChoiceSection
