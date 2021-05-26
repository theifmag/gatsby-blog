import React from 'react'
import Helmet from 'react-helmet'

import BannerSection from '../templates/BannerSection'
import EditorsChoiceSection from '../organisms/EditorsChoice'
import LatestArticlesSection from '../templates/LatestArticles'
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
			<LatestArticlesSection />
			<Footer />
		</>
	)
}

export default HomePage
