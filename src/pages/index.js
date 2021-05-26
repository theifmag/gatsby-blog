import React from 'react'
import Helmet from 'react-helmet'

import BannerSection from '../templates/BannerSection'
import EditorsChoiceSection from '../organisms/EditorsChoice'
import Footer from '../organisms/Footer'

import '../styles/index.css'

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
			<EditorsChoiceSection />
			<Footer />
		</>
	)
}

export default HomePage
