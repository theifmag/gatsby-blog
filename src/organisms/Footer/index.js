import React from 'react'
import FooterBottomSection from '../../atoms/FooterBottomSection'
import Spacer from '../../atoms/Spacer'
import ContactLinks from '../../molecules/ContactLinks'

import styles from './index.module.css'

const Footer = () => {
	return (
		<>
			<footer className={styles.container}>
				<h1 className='titleText'>Want to collaborate?</h1>
				<Spacer y={40} />
				<section className='flex-row'>
					<div className={styles.contactSection}>
						<ContactLinks />
					</div>
					<div className={styles.talkToUs}>form</div>
				</section>
			</footer>
			<FooterBottomSection />
		</>
	)
}

export default Footer
