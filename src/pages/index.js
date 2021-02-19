import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import Homeblog from './homeblog'

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
			<Navbar />
			<Homeblog />
		</Layout>
	)
}

export default IndexPage
