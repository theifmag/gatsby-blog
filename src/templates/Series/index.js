import React from 'react'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import SeriesCard from '../../molecules/SeriesCard'

import styles from './index.module.css'

const Series = () => {
	const seriesList = [
		{
			name: 'Rendezvous',
			image: '/assets/series/rendezvous.png',
		},
		{
			name: 'Podcasts',
			image: '/assets/series/podcasts.png',
		},
		{
			name: 'Stories',
			image: '/assets/series/stories.png',
		},
	]

	return (
		<section className={styles.container}>
			<Title text='Series' />
			<Spacer y={100} />
			<div className={styles.wrapper}>
				{seriesList.map((series, key) => (
					<SeriesCard key={key} {...series} />
				))}
			</div>
			<Spacer y={100} />
		</section>
	)
}

export default Series
