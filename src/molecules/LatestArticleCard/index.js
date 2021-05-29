import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'
import useImageData from '../../functions/useImageData'

import styles from './index.module.css'

const Category = ({ category }) => (
	<span className={styles.category}>{category}</span>
)

const Excerpt = ({ excerpt }) => <p className={styles.excerpt}>{excerpt}</p>

const Author = ({ author }) => (
	<span className={styles.author}>{`By ${author}`}</span>
)

const Date = ({ date }) => <span className={styles.author}>{date}</span>

const SmallCard = ({
	thumbnail,
	category,
	title,
	excerpt,
	author,
	date,
	timeToRead,
	path,
}) => (
	<article className={styles.smallContainer}>
		<Link to={path}>
			<GatsbyImage
				image={thumbnail}
				alt='thumbnail'
				className={styles.smallThumbnail}
			/>
			<Spacer x={30} />
			<div className={styles.smallTextBox}>
				<Category category={category} />
				<Spacer y={10} />
				<h2 className={styles.smallTitle}>{title}</h2>
				<Spacer y={16} />
				<Excerpt excerpt={excerpt} />
				<Spacer y={16} />
				<Author author={author} />
				<Spacer y={5} />
				<Date date={date + ' | ' + timeToRead + ' mins'} />
			</div>
		</Link>
	</article>
)

const LargeCard = ({
	thumbnail,
	category,
	title,
	excerpt,
	author,
	date,
	timeToRead,
	path,
}) => (
	<article className={styles.largeContainer}>
		<Link to={path}>
			<GatsbyImage
				className={styles.largeThumbnail}
				image={thumbnail}
				alt='thumbnail'
			/>
			<Spacer y={20} />
			<Category category={category} />
			<Spacer y={10} />
			<h2 className={styles.largeTitle}>{title}</h2>
			<Spacer y={20} />
			<Excerpt excerpt={excerpt} />
			<Spacer y={20} />
			<Author author={author} />
			<Spacer y={5} />
			<Date date={date + ' | ' + timeToRead + ' mins'} />
		</Link>
	</article>
)

const LatestArticleCard = ({ article, index }) => {
	const [mobile] = useWindowResize()
	const allFile = useImageData()

	const image = allFile.find((i) => article.thumbnail.includes(i.name))
		?.childImageSharp?.gatsbyImageData

	if (mobile || index < 2) {
		return <LargeCard {...article} thumbnail={image} />
	}

	return <SmallCard {...article} thumbnail={image} />
}

export default LatestArticleCard
