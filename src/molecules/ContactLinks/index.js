import React from 'react'
import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

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
	</div>
)

export default ContactLinks
