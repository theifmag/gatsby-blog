import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'
import useImageData from '../../functions/useImageData'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'

const colorColor = [
	'#fcc09b',
	'#9ed692',
	'#a7b4f5',
	'#a7b4f5',
	'#fcc09b',
	'#9ed692',
	'#9ed692',
	'#a7b4f5',
	'#fcc09b',
]

const mobileColor = [
	'#fcc09b',
	'#9ed692',
	'#a7b4f5',
	'#fcc09b',
	'#9ed692',
	'#a7b4f5',
	'#fcc09b',
	'#9ed692',
	'#a7b4f5',
]

const AboutCard = (props) => {
	const { name, bio, thumbnail, index } = props

	const allFile = useImageData()

	const [, , desktop] = useWindowResize()

	const image = allFile.find((i) => thumbnail.includes(i.name))?.childImageSharp
		?.gatsbyImageData

	return (
		<div className={styles.container}>
			<div
				className={styles.background}
				style={{
					backgroundColor: desktop ? colorColor[index] : mobileColor[index],
				}}></div>
			<GatsbyImage className={styles.thumbnail} image={image} alt={name} />
			<Spacer y={15} />
			<h2 className={styles.title}>{name}</h2>
			<Spacer y={12} />
			<p className={styles.bio}>{bio}</p>
		</div>
	)
}

export default AboutCard
