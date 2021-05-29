import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'

const ArticleCard = (props) => {
	const { article, allFile } = props
	const { timeToRead, excerpt, frontmatter, id } = article
	const { title, category, thumbnail, author, date, path } = frontmatter

	const [mobile] = useWindowResize()

	const image = allFile.find((i) => thumbnail.includes(i.name))?.childImageSharp
		?.gatsbyImageData

	return (
		<div className={styles.container}>
			<Link to={path}>
				<GatsbyImage
					alt='thumbnail'
					image={image}
					className={styles.thumbnail}
				/>
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
