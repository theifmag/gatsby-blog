import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Homeblog from '../components/homeblog'

import '../styles/index.css'

const IndexPage = () => {
	return (
		<Layout>
			<Helmet>
				<title>The Intersectional Feminist</title>
				<meta
					name='description'
					content={'The If Mag The Best Blogs on every topic'}
				/>
			</Helmet>
			<Header />
			<Homeblog />
			<Footer />
		</Layout>
	)
}

export default IndexPage
