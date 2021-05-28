import React, { useState } from 'react'

import Spacer from '../../atoms/Spacer'
import ArticleCard from '../../molecules/ArticleCard'

import DOWN_ARROW from '../../images/articles/down-arrow.svg'
import styles from './index.module.css'

const CategoryBlock = ({ category }) => {
	const [categoryTitle, articles] = category
	const [collapse, setCollapse] = useState(false)

	const onArrowClick = () => {
		setCollapse(!collapse)
	}

	return (
		<div id={categoryTitle} className={styles.container}>
			<div className={'flex-row-space-between'}>
				<h1 className={styles.title}>{categoryTitle}</h1>
				<Spacer x={30} />
				<div className={styles.arrowContainer} onClick={onArrowClick}>
					<img
						src={DOWN_ARROW}
						alt='down arrow'
						className={[styles.arrow, collapse && styles.upArrow].join(' ')}
					/>
				</div>
				<Spacer x={30} />
				<div className={styles.underline}></div>
			</div>
			<Spacer y={60} />
			{collapse || (
				<>
					<div className={styles.articlesContainer}>
						{articles.map((article, key) => (
							<ArticleCard article={article} key={key} />
						))}
					</div>
					<Spacer y={100} />
				</>
			)}
		</div>
	)
}

export default CategoryBlock
