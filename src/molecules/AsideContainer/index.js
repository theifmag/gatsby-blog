import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './index.module.css'
import AsideCard from '../AsideCard'
import Spacer from '../../atoms/Spacer'

const AsideContainer = ({ category }) => {
	const data = useStaticQuery(graphql`
		query AsideQuery($category: String) {
			allMarkdownRemark(
				filter: { frontmatter: { category: { eq: $category } } }
				limit: 2
			) {
				edges {
					node {
						id
						frontmatter {
							title
							thumbnail
						}
						excerpt(truncate: true)
					}
				}
			}
		}
	`)

	const articlesData = data.allMarkdownRemark.edges

	return (
		<>
			<aside className={styles.container}>
				<h2 className={styles.title}>You may also like</h2>
				<Spacer y={30} />
				{articlesData.map((article, key) => (
					<>
						<AsideCard key={key} article={article} />
						<Spacer y={30} />
					</>
				))}
			</aside>
			<Spacer y={50} />
		</>
	)
}

export default AsideContainer
