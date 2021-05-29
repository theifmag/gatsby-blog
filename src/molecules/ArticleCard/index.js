import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'

const ArticleCard = (props) => {
	const { article } = props
	const { timeToRead, excerpt, frontmatter } = article
	const { title, category, thumbnail, author, date, path } = frontmatter

	const [mobile] = useWindowResize()

	return (
		<div className={styles.container}>
			<Link to={path}>
				<img alt='thumbnail' src={thumbnail} className={styles.thumbnail} />
				<Spacer y={20} />
				<span className={styles.category}>{category}</span>
				<Spacer y={16} />
				<h2 className={styles.title}>{title}</h2>
				<Spacer y={10} />
				<p className={styles.excerpt}>{excerpt}</p>
				<Spacer y={16} />
				<span className={styles.author}>{`By ${author}`}</span>
				<Spacer y={2} />
				<span className={styles.author}>{date}</span>
				<span className={styles.author}>{' | ' + timeToRead + ' mins'}</span>
				{mobile && <Spacer y={50} />}
			</Link>
		</div>
	)
}

export default ArticleCard
