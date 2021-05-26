import { Link } from 'gatsby'
import React from 'react'

import Button from '../../atoms/Button'
import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const HeroText = () => (
	<div className={styles.container}>
		<h1 className={styles.title}>
			If you see inequality as a “them” problem or “unfortunate other” problem,
			that is a problem
		</h1>
		<Spacer y={20} />
		<span className={styles.author}>-Kimberlee Crenshaw</span>
		<Spacer y={50} />

		<Link to='/about'>
			<Button text='find out more' />
		</Link>
	</div>
)

export default HeroText
