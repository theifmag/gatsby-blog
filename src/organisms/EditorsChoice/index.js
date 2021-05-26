import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import ArticleCard from '../../molecules/ArticleCard'

import styles from './index.module.css'

const EditorsChoiceSection = () => {
	const data = useStaticQuery(graphql`
		query EditorsChoiceQuery {
			allMarkdownRemark(
				limit: 3
				filter: { frontmatter: { EditorChoice: { eq: true } } }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 150)
						frontmatter {
							title
							path
							category
							author
							thumbnail
							date(formatString: "MMMM YYYY")
						}
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
			<Spacer y={100} />
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
