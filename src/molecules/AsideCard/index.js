import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const AsideCard = (props) => {
	const { article } = props

	const { excerpt, frontmatter } = article.node
	const { title, thumbnail } = frontmatter

	return (
		<div className={styles.container}>
			<img alt='thumbnail' src={thumbnail} className={styles.thumbnail} />
			<Spacer y={30} />
			<h3 className={styles.title}>{title}</h3>
			<Spacer y={16} />
			<p className={styles.description}>{excerpt}</p>
		</div>
	)
}

export default AsideCard
