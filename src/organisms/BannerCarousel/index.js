import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import CAROUSEL_IMAGE from '../../images/banner/carousel-1.jpg'

const BannerCarousel = () => (
	<div className={styles.container}>
		<Spacer y={60} />
		<Carousel
			autoPlay
			emulateTouch
			infiniteLoop
			showThumbs={false}
			showStatus={false}>
			<img className={styles.image} src={CAROUSEL_IMAGE} alt='carousel' />
			<img className={styles.image} src={CAROUSEL_IMAGE} alt='carousel' />
			<img className={styles.image} src={CAROUSEL_IMAGE} alt='carousel' />
		</Carousel>
	</div>
)

export default BannerCarousel
