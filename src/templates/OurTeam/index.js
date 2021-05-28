import React from 'react'

import Title from '../../atoms/Title'
import Spacer from '../../atoms/Spacer'
import TeamPhotos from '../../organisms/TeamPhotos'

import styles from './index.module.css'

const OurTeam = () => {
	return (
		<section className={styles.container}>
			<Title text='Our Team' />
			<Spacer y={100} />
			<TeamPhotos />
			<Spacer y={100} />
		</section>
	)
}

export default OurTeam
