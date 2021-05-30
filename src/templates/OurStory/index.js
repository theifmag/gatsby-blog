import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'
import PastPresentFuture from '../../organisms/PastPresentFuture'

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

	const [mobile] = useWindowResize()

	const aboutText = data?.site?.siteMetadata?.aboutPage?.about

	return (
		<section className={styles.container}>
			<Spacer y={mobile ? 30 : 100} />
			<Title text='Our Story' />
			<Spacer y={mobile ? 20 : 50} />
			<p className={styles.aboutText}>{aboutText}</p>
			<Spacer y={mobile ? 30 : 100} />
			<PastPresentFuture />
			<Spacer y={mobile ? 30 : 100} />
		</section>
	)
}

export default OurStory
