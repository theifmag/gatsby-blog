import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Input from '../../atoms/Input'

import styles from './index.module.css'

const Search = () => {
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

	return (
		<div>
			<Input value={searchTerm} onChange={onTextChange} />
			{results.map((result, key) => (
				<div key={key}>
					<span>{result.title}</span>
				</div>
			))}
			{!!searchTerm && !results.length && (
				<span>uh oh, there are no results</span>
			)}
		</div>
	)
}

export default Search
