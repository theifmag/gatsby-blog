import { Link } from 'gatsby'
import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const ArticleCard = (props) => {
	const { article } = props
	const { timeToRead, excerpt, frontmatter } = article
	const { title, category, thumbnail, author, date, path } = frontmatter

	return (
		<div className={styles.container}>
			<Link to={path}>
				<img alt='thumbnail' src={thumbnail} className={styles.thumbnail} />
				<Spacer y={20} />
				<span className={styles.category}>{category}</span>
				<Spacer y={10} />
				<h2 className={styles.title}>{title}</h2>
				<Spacer y={16} />
				<p className={styles.excerpt}>{excerpt}</p>
				<Spacer y={16} />
				<span className={styles.author}>{`By ${author}`}</span>
				<Spacer y={2} />
				<span className={styles.author}>{date}</span>
			</Link>
		</div>
	)
}

export default ArticleCard
