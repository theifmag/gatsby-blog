import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'

const ComingSoon = () => {
	return (
		<Layout>
			<Navbar />
			<div className='comingsoon-container'>
				<div className='comingsoon-left'>
					<h1>
						<strong>Coming Soon </strong>
					</h1>
					<br /> <br />
					<h3>Follow us</h3>
					<br />
					<h5 className='comingsoon-social-icon'>
						<a
							href='https://www.facebook.com/theifmag'
							target='_blank'
							rel='noreferrer'
							style={{
								flex: '1',
							}}>
							<i className='fab fa-facebook' />
						</a>
						<a
							href='https://www.linkedin.com/company/theifmag'
							target='_blank'
							rel='noreferrer'
							style={{
								flex: '1',
							}}>
							<i class='fab fa-linkedin' aria-hidden='true'></i>
						</a>

						<a
							href='https://www.instagram.com/theifmag/'
							target='_blank'
							rel='noreferrer'
							style={{
								flex: '1',
							}}>
							<i className='fab fa-instagram' />
						</a>
					</h5>
				</div>

				<div className='comingsoon-right'>
					<img
						src='https://us.123rf.com/450wm/tpimovit/tpimovit1711/tpimovit171100350/90266895-stock-vector-vector-paper-airplane-travel-route-symbol-vector-illustration-of-hand-drawn-paper-plane-isolated-out.jpg?ver=6'
						alt='coming soon wallpaper'
					/>
				</div>
			</div>
		</Layout>
	)
}

export default ComingSoon
