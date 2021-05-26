import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Spacer from '../atoms/Spacer'
import CategoryBlock from '../organisms/CategoryBlock'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const ArticlesPage = () => {
	const data = useStaticQuery(graphql`
		query ArticlesPageQuery {
			allMarkdownRemark {
				nodes {
					timeToRead
					frontmatter {
						title
						category
						thumbnail
						author
						date(formatString: "MMMM YYYY")
						path
					}
					excerpt(format: PLAIN, truncate: true, pruneLength: 150)
				}
				distinct(field: frontmatter___category)
			}
		}
	`)

	const { nodes, distinct } = data.allMarkdownRemark
	// distinct = array of categories
	// nodes = array of all articles
	const megaArrayOfCategories = distinct.sort().map((category) => {
		const articlesInThisCategory = nodes.filter((article) => {
			return article?.frontmatter?.category === category
		})
		return [category, articlesInThisCategory]
	})

	return (
		<>
			<Header />
			<Spacer y={80} />
			{megaArrayOfCategories.map((category, key) => (
				<CategoryBlock category={category} key={key} />
			))}
			<Footer />
		</>
	)
}

export default ArticlesPage
