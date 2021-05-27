import React from 'react'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'

import styles from './index.module.css'

const OurStory = () => {
	return (
		<section className={styles.container}>
			<Spacer y={100} />
			<Title text='Our Story' />
			<Spacer y={50} />
		</section>
	)
}

export default OurStory
