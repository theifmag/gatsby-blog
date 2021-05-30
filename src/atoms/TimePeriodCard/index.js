import React from 'react'

import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'

const TimePeriodCard = ({ name, content }) => {
	const [mobile] = useWindowResize()

	return (
		<>
			<div className={styles.container}>
				<div className={styles.circle} />
				<div className={styles.borderTop} />
				{mobile || <Spacer y={60} />}
				<h2 className={styles.title}>{name}</h2>
				<Spacer y={10} />
				<p className={styles.content}>{content}</p>
			</div>
			{mobile && <Spacer y={50} />}
		</>
	)
}

export default TimePeriodCard
