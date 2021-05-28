import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

const SeriesCard = ({ image, name }) => {
	return (
		<Link to={'/articles?category=' + name}>
			<div className={styles.container}>
				<img className={styles.image} src={image}></img>
				<h3 className={styles.name}>{name}</h3>
			</div>
		</Link>
	)
}

export default SeriesCard
