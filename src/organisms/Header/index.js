import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

import LOGO from '../../images/banner/Logo.png'
import SEARCH from '../../images/banner/search.svg'
import NavBar from '../../molecules/NavBar'
import { Link } from 'gatsby'

const Header = () => {
	return (
		<header className={styles.container}>
			<Link to='/'>
				<div className='flex-row-space-between'>
					<img className={styles.logo} src={LOGO} alt='logo'></img>
					<Spacer x={20} />
					<h1 className={styles.title}>the intersectional feminist</h1>
				</div>
			</Link>
			<div className='flex-row-space-between'>
				<NavBar />
				<Spacer x={30} />
				<img className={styles.searchIcon} src={SEARCH} alt='search'></img>
			</div>
		</header>
	)
}

export default Header
