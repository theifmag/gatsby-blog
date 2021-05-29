import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import SeriesCard from '../../molecules/SeriesCard'

import styles from './index.module.css'

const Series = () => {
	const seriesList = [
		{
			name: 'Rendezvous',
			image: '/assets/series/rendezvous.png',
			imageName: 'rendezvous',
		},
		{
			name: 'Casteism',
			image: '/assets/series/podcasts.png',
			imageName: 'podcasts',
		},
		{
			name: 'Rendezvous',
			image: '/assets/series/stories.png',
			imageName: 'stories',
		},
	]

	const data = useStaticQuery(graphql`
		query SeriesQuery {
			allFile(filter: { sourceInstanceName: { eq: "markdown-images" } }) {
				edges {
					node {
						id
						childImageSharp {
							gatsbyImageData(quality: 100, width: 350, placeholder: BLURRED)
						}
						name
					}
				}
			}
			allMarkdownRemark {
				distinct(field: frontmatter___category)
			}
		}
	`)

	const allFile = data.allFile.edges.map((i) => i.node)

	const filterForEmpty = (item) =>
		data.allMarkdownRemark.distinct.includes(item.name)

	return (
		<section className={styles.container}>
			<Title text='Series' />
			<Spacer y={100} />
			<div className={styles.wrapper}>
				{seriesList.filter(filterForEmpty).map((series, key) => (
					<SeriesCard allFile={allFile} key={key} {...series} />
				))}
			</div>
			<Spacer y={100} />
		</section>
	)
}

export default Series
