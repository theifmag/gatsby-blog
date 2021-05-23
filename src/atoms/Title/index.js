import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const Title = ({ text }) => (
	<div className={'flex-row'}>
		<h1 className={styles.title}>{text}</h1>
		<Spacer x={50} />
		<div className={styles.underline}></div>
	</div>
)

export default Title
