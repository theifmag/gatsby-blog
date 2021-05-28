import React from 'react'

import Spacer from '../../atoms/Spacer'
import useWindowSize from '../../functions/useWindowResize'
import HeroText from '../../molecules/HeroText'
import PopularArticlesContainer from '../PopularArticlesContainer'

import styles from './index.module.css'

const BannerTextSection = () => {
	const [mobile] = useWindowSize()
	return (
		<div className={styles.container}>
			<Spacer y={60} />
			<HeroText />
			{mobile && <Spacer y={50} />}
			<PopularArticlesContainer />
			<Spacer y={20} />
		</div>
	)
}

export default BannerTextSection
