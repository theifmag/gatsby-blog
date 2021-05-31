import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Spacer from '../../atoms/Spacer'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import useWindowSize from '../../functions/useWindowResize'

import styles from './index.module.css'

const LOGO = '../../images/banner/intersectionality-logo.png'

const WhoWeAre = () => {
	const [mobile] = useWindowSize()

	const data = useStaticQuery(graphql`
		query MyStory {
			site {
				siteMetadata {
					aboutPage {
						about
					}
				}
			}
		}
	`)

	const { about } = data?.site?.siteMetadata?.aboutPage

	return (
		<section className={styles.container}>
			<Spacer y={mobile ? 30 : 50} />
			<Title text='Our Story' />
			<Spacer y={mobile ? 50 : 80} />
			<div className={mobile ? styles.mobileContainer : 'flex-row'}>
				<div>
					{mobile && <Spacer y={40} />}
					<p
						className={styles.aboutText}
						dangerouslySetInnerHTML={{ __html: about }}></p>
					<Spacer y={40} />
					<Link to='/about'>
						<Button text='read our story' />
					</Link>
				</div>
				<StaticImage
					src={LOGO}
					className={styles.image}
					objectFit='contain'
					alt='intersectionality logo'
				/>
			</div>
			<Spacer y={mobile ? 50 : 80} />
		</section>
	)
}

export default WhoWeAre
