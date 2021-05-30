import React from 'react'
import TimePeriodCard from '../../atoms/TimePeriodCard'

import styles from './index.module.css'

const data = [
	{
		name: 'our past',
		content:
			'Suspendisse magna asdbry. In hac habitasse platea dictumst. Fusce mauris risus, ornare vel. arius id, vulputate nec nunc. Suspendisse magna asdbry',
	},
	{
		name: 'our present',
		content:
			'Suspendisse magna asdbry. In hac habitasse platea dictumst. Fusce mauris risus, ornare vel. arius id, vulputate nec nunc. Suspendisse magna asdbry',
	},
	{
		name: 'our future',
		content:
			'Suspendisse magna asdbry. In hac habitasse platea dictumst. Fusce mauris risus, ornare vel. arius id, vulputate nec nunc. Suspendisse magna asdbry',
	},
]

const PastPresentFuture = () => {
	return (
		<section className={styles.container}>
			{data.map((time, key) => (
				<TimePeriodCard {...time} key={key} />
			))}
		</section>
	)
}

export default PastPresentFuture
