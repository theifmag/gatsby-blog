import React from 'react'

import Spacer from '../../atoms/Spacer'
import SocialImageLink from '../../atoms/SocialImageLink'

import styles from './index.module.css'

import FACEBOOK_LOGO from '../../images/social/facebook.svg'
import INSTAGRAM_LOGO from '../../images/social/instagram.svg'
import LINKEDIN_LOGO from '../../images/social/linkedin.svg'

const ContactLinks = () => (
	<div className={styles.container}>
		<h2>Contact</h2>
		<Spacer y={16} />
		<a className={styles.email} href='mailto:theifmag@gmail.com'>
			theifmag@gmail.com
		</a>
		<Spacer y={40} />
		<h2>Follow</h2>
		<Spacer y={16} />
		<div className={styles.socialIconsContainer}>
			<SocialImageLink
				src={FACEBOOK_LOGO}
				alt='Facebook logo'
				link='https://www.fb.com/theifmag'
			/>
			<Spacer x={20} />
			<SocialImageLink
				src={INSTAGRAM_LOGO}
				alt='Instagram logo'
				link='https://www.instagram.com/theifmag'
			/>
			<Spacer x={20} />
			<SocialImageLink
				src={LINKEDIN_LOGO}
				alt='Linkedin logo'
				link='https://www.linkedin.com/in/theifmag'
			/>
		</div>
	</div>
)

export default ContactLinks
