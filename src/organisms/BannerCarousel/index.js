import React from 'react'

import styles from './index.module.css'

import CAROUSEL_IMAGE from '../../images/banner/carousel-1.jpg'

const BannerCarousel = () => (
	<div className={styles.container}>
		<img className={styles.image} src={CAROUSEL_IMAGE} alt='carousel' />
	</div>
)

export default BannerCarousel
