import React from 'react'
import Latestblogcard from '../components/cards/latestblogcard'
// import '../styles/css/style.css'
// import '../styles/css/animate.css'
// import '../styles/css/fonts.css'
// import '../styles/css/flaticon2.css'
// import '../styles/css/font-awesome.css'
// import '../styles/css/fullpage.min.css'
// import '../styles/css/demo.css'
// import '../styles/css/owl.carousel.css'
// import '../styles/css/owl.theme.default.css'
// import '../styles/css/magnific-popup.css'
// import '../styles/css/style_V.css'
// import '../styles/css/responsive_V.css'
import { Link } from 'gatsby'
import Editorcard from '../components/cards/editorcard'
import Footer from '../components/footer'

const Homeblog = () => {
	return (
		<div>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12 main-text-div'>
						<h2
							style={{
								fontSize: '30px',
								color: '#ee4c7c',
								fontFamily: 'Bad Script',
							}}>
							{' '}
						</h2>
						<h4
							style={{
								marginTop: '5vh',
								marginBottom: '2vh',
							}}>
							If we aren&#39;t intersectional, some of us, the most vulnerable,
							are going to fall through the cracks.
						</h4>
						<strong>-Kimberlé Williams Crenshaw</strong>
					</div>
					<div
						className='col-lg-6 col-md-6 col-sm-12'
						style={{
							overflow: 'hidden',
							objectFit: 'contain',
						}}>
						<center>
							<img
								src={require('../images/Homeimage2.jpg')}
								alt='img'
								style={{
									maxWidth: '430px',
									width: '100%',
								}}
							/>
						</center>
					</div>
				</div>
			</div>

			<div className='ck_bc_main_wrapper float_left'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left'>
								{/* <h4>Articles</h4> */}
								<h3>Our Latest Articles</h3>
							</div>
						</div>
					</div>
				</div>

				<Latestblogcard />
			</div>

			<div className='ck_blog_cake_wrapper float_left'>
				<div className='ck_blog_cake_img_overlay' />
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='ck_heading_center_wrapper ck_heading_center_wrapper_ok float_left'>
								<h3
									style={{
										color: 'black',
									}}>
									Editor&#39;s Choice
								</h3>
							</div>
						</div>
					</div>
				</div>

				<Editorcard style={{ zIndex: '100' }} />
			</div>
			<Footer />
		</div>
	)
}

export default Homeblog
