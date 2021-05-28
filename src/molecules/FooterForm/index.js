import React from 'react'
import Button from '../../atoms/Button'
import Spacer from '../../atoms/Spacer'
import Input, { TextArea } from '../../atoms/Input'

import styles from './index.module.css'

const FooterForm = () => {
	return (
		<>
			<h2 className={styles.title}>Talk to us</h2>
			<Spacer y={20} />
			<form
				name='contact-us-footer'
				data-netlify-honeypot='bot-field'
				data-netlify='true'
				className={styles.form}>
				<input type='hidden' name='form-name' value='contact' />
				<Input name='name' placeholder='name' />
				<Spacer y={12} />
				<Input name='email' placeholder='email' />
				<Spacer y={12} />
				<TextArea name='message' placeholder='your message' />
				<Spacer y={32} />
				<Button text='submit' type='submit' />
			</form>
		</>
	)
}

export default FooterForm
