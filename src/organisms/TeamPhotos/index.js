import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AboutCard from '../../molecules/AboutCard'

import styles from './index.module.css'

const TeamPhotos = () => {
	const data = useStaticQuery(graphql`
		query TeamPhotosQuery {
			site {
				siteMetadata {
					aboutPage {
						bios {
							bio
							name
							thumbnail
						}
					}
				}
			}
		}
	`)

	const { bios } = data.site.siteMetadata.aboutPage

	return (
		<section className={styles.container}>
			{bios.map((bio, key) => (
				<AboutCard {...bio} index={key} key={key} />
			))}
		</section>
	)
}

export default TeamPhotos
