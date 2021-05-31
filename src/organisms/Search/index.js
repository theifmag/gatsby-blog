import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Input from '../../atoms/Input'
import { Author, Category, Title, Excerpt } from '../../molecules/ArticleCard'

import styles from './index.module.css'
import Spacer from '../../atoms/Spacer'
import { StaticImage } from 'gatsby-plugin-image'

const EMPTY_IMAGE = '../../images/banner/empty_search_results.svg'
const CLOSE_ICON = '../../images/banner/close_icon.svg'

const Search = ({ setSearch }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const data = useStaticQuery(graphql`
		query SearchQuery {
			localSearchPages {
				index
				store
			}
		}
	`)

	const { index, store } = data.localSearchPages
	const results = useFlexSearch(searchTerm, index, store)

	const onTextChange = (e) => {
		setSearchTerm(e.target.value)
	}

	const onCloseClick = () => {
		if (searchTerm) {
			setSearchTerm('')
		} else {
			setSearch(false)
		}
	}

	const noSearchText = !!searchTerm
		? 'Uh oh! There are no results'
		: 'Start typing to see some results'

	return (
		<div className={styles.container}>
			<div>
				<Input
					placeholder='Search...'
					value={searchTerm}
					onChange={onTextChange}
				/>
				<StaticImage
					onClick={onCloseClick}
					className={styles.closeIcon}
					objectFit='contain'
					src={CLOSE_ICON}
					alt='empty'
				/>
			</div>
			<Spacer y={20} />
			<div className={!!results.length && styles.resultsContainer}>
				{results.map((result, key) => (
					<Link to={result.path} key={key}>
						<Spacer y={30} />
						<div className={styles.resultContainer}>
							<Category category={result.category} />
							<Spacer y={6} />
							<Title title={result.title} />
							<Spacer y={12} />
							<Excerpt excerpt={result.excerpt} />
							<Spacer y={6} />
							<Author author={result.author} />
						</div>
						<Spacer y={20} />
					</Link>
				))}
			</div>
			{!!results.length || (
				<div className={styles.emptyContainer}>
					<Spacer y={50} />
					<StaticImage objectFit='contain' src={EMPTY_IMAGE} alt='empty' />
					<Spacer y={30} />
					<p>{noSearchText}</p>
				</div>
			)}
		</div>
	)
}

export default Search
