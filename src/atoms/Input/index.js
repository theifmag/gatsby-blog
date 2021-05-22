import React, { useState } from 'react'

import styles from './index.module.css'

const Input = (props) => {
	const [value, setValue] = useState('')

	const onChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<input
			className={styles.input}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}

export const TextArea = (props) => {
	const [value, setValue] = useState('')

	const onChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<textarea
			className={styles.textarea}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}

export default Input
