import React from 'react'
import { Link } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import NavBar from '../../molecules/NavBar'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'
import LOGO from '../../images/banner/Logo.png'
import SEARCH from '../../images/banner/search.svg'

const Header = () => {
	const [mobile] = useWindowResize()

	return (
		<>
			<header className={styles.container}>
				<Link to='/'>
					<div className='flex-row-space-between'>
						<img className={styles.logo} src={LOGO} alt='logo'></img>
						<Spacer x={mobile ? 10 : 20} />
						<h1 className={styles.title}>the intersectional feminist</h1>
					</div>
				</Link>
				<div className='flex-row-space-between'>
					{mobile || <NavBar />}
					{mobile || <Spacer x={40} />}
					<img className={styles.searchIcon} src={SEARCH} alt='search'></img>
				</div>
			</header>
			{mobile && <NavBar />}
		</>
	)
}

export default Header
