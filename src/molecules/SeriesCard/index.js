import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import styles from './index.module.css'

const SeriesCard = ({ allFile, imageName, name }) => {
	const imageData = allFile.find((i) => i.name.includes(imageName))
		?.childImageSharp?.gatsbyImageData

	console.log({ imageData })

	return (
		<Link to={'/articles'} state={{ name }}>
			<div className={styles.container}>
				<GatsbyImage className={styles.image} image={imageData} alt={name} />
				<h3 className={styles.name}>{name}</h3>
			</div>
		</Link>
	)
}

export default SeriesCard
