import { Link } from 'gatsby'
import React from 'react'

import Spacer from '../../atoms/Spacer'
import useWindowResize from '../../functions/useWindowResize'

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
			<img src={thumbnail} alt='thumbnail' className={styles.smallThumbnail} />
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
			<img className={styles.largeThumbnail} src={thumbnail} alt='thumbnail' />
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

	if (mobile || index < 2) {
		return <LargeCard {...article} />
	}

	return <SmallCard {...article} />
}

export default LatestArticleCard
