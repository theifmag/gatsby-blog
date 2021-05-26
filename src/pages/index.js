import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../organisms/Footer'

import '../styles/index.css'
import BannerSection from '../templates/BannerSection'

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>The Intersectional Feminist</title>
				<meta
					name='description'
					content={'The If Mag The Best Blogs on every topic'}
				/>
			</Helmet>
			<BannerSection />
			<Footer />
		</>
	)
}

export default HomePage
