import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const colorColor = ['#aab8a0', '#ffcfa0', '#eac38d']

const AboutCard = (props) => {
	const { name, bio, thumbnail, index } = props

	return (
		<div className={styles.container}>
			<div
				className={styles.background}
				style={{ backgroundColor: colorColor[index % 3] }}></div>
			<img className={styles.thumbnail} src={thumbnail} alt={name} />
			<Spacer y={15} />
			<h2 className={styles.title}>{name}</h2>
			<Spacer y={12} />
			<p className={styles.bio}>{bio}</p>
		</div>
	)
}

export default AboutCard
