import React from 'react'
import { Link } from 'gatsby'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const NavBar = () => {
	return (
		<div className='flex-row'>
			<Link className={styles.link} activeClassName={styles.activeLink} to='/'>
				Home
			</Link>
			<Spacer x={40} />
			<Link
				activeClassName={styles.activeLink}
				className={styles.link}
				to='/articles'>
				Articles
			</Link>
			<Spacer x={40} />
			<Link
				activeClassName={styles.activeLink}
				className={styles.link}
				to='/about'>
				About
			</Link>
		</div>
	)
}

export default NavBar
