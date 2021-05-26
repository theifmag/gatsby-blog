import React from 'react'

import Spacer from '../../atoms/Spacer'
import BannerCarousel from '../../organisms/BannerCarousel'
import BannerTextSection from '../../organisms/BannerTextSection'
import Header from '../../organisms/Header'

import styles from './index.module.css'

const BannerSection = () => {
	return (
		<div className={styles.pageContainer}>
			<Header />
			<section className={styles.container}>
				<BannerTextSection />
				<BannerCarousel />
			</section>
		</div>
	)
}

export default BannerSection
