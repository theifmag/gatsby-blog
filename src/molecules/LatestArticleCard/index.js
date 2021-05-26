import React from 'react'

import Spacer from '../../atoms/Spacer'

import styles from './index.module.css'

const Category = ({ category }) => (
	<span className={styles.category}>{category}</span>
)

const Excerpt = ({ excerpt }) => <p className={styles.excerpt}>{excerpt}</p>

const Author = ({ author }) => (
	<span className={styles.author}>{`By ${author}`}</span>
)

const Date = ({ date }) => <span className={styles.author}>{date}</span>

const SmallCard = ({ thumbnail, category, title, excerpt, author, date }) => (
	<article className={styles.smallContainer}>
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
			<Date date={date} />
		</div>
	</article>
)

const LargeCard = ({ thumbnail, category, title, excerpt, author, date }) => (
	<article className={styles.largeContainer}>
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
		<Date date={date} />
	</article>
)

const LatestArticleCard = ({ article, index }) => {
	if (index < 2) {
		return <LargeCard {...article} />
	}

	return <SmallCard {...article} />
}

export default LatestArticleCard
