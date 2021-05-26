import React from 'react'

import Spacer from '../../atoms/Spacer'
import HeroText from '../../molecules/HeroText'
import PopularArticlesContainer from '../PopularArticlesContainer'

import styles from './index.module.css'

const BannerTextSection = () => (
	<div className={styles.container}>
		<Spacer y={80} />
		<HeroText />
		<PopularArticlesContainer />
		<Spacer y={20} />
	</div>
)

export default BannerTextSection
