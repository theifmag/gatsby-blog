import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { StaticImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const CAROUSEL_IMAGE_ONE = '../../images/banner/carousel-1.jpg'
const CAROUSEL_IMAGE_TWO = '../../images/banner/carousel-2.jpg'
const CAROUSEL_IMAGE_THREE = '../../images/banner/carousel-3.jpg'
const CAROUSEL_IMAGE_FOUR = '../../images/banner/carousel-4.jpg'
const BannerCarousel = () => (
	<div className={styles.container}>
		<Spacer y={60} />
		<Carousel
			autoPlay
			emulateTouch
			infiniteLoop
			showThumbs={false}
			showStatus={false}>
			<StaticImage
				className={styles.image}
				src={CAROUSEL_IMAGE_ONE}
				alt='carousel'
			/>
			<StaticImage
				className={styles.image}
				src={CAROUSEL_IMAGE_TWO}
				alt='carousel'
			/>
			<StaticImage
				className={styles.image}
				src={CAROUSEL_IMAGE_THREE}
				alt='carousel'
			/>
			<StaticImage
				className={styles.image}
				src={CAROUSEL_IMAGE_FOUR}
				alt='carousel'
			/>
		</Carousel>
	</div>
)

export default BannerCarousel
