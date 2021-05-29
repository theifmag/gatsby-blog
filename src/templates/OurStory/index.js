import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'

import styles from './index.module.css'

const OurStory = () => {
	const data = useStaticQuery(graphql`
		query OurStoryQuery {
			site {
				siteMetadata {
					aboutPage {
						about
					}
				}
			}
		}
	`)

	const aboutText = data?.site?.siteMetadata?.aboutPage?.about

	return (
		<section className={styles.container}>
			<Spacer y={100} />
			<Title text='Our Story' />
			<Spacer y={50} />
			<p className={styles.aboutText}>{aboutText}</p>
			<Spacer y={100} />
		</section>
	)
}

export default OurStory
