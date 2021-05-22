import React, { useRef } from 'react'
import Button from '../../atoms/Button'
import Spacer from '../../atoms/Spacer'
import Input, { TextArea } from '../../atoms/Input'

import styles from './index.module.css'

const FooterForm = () => {
	const nameRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()

	return (
		<>
			<h2 classNames={styles.title}>Talk to us</h2>
			<Spacer y={20} />
			<form className={styles.form}>
				<Input placeholder='name' ref={nameRef} />
				<Spacer y={16} />
				<Input placeholder='email' ref={emailRef} />
				<Spacer y={16} />
				<TextArea placeholder='your message' ref={messageRef} />
				<Spacer y={32} />
				<Button text='submit' onClick={() => {}} />
			</form>
		</>
	)
}

export default FooterForm
