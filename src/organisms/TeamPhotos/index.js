import React from 'react'

import styles from './index.module.css'

// import AMRITA_IMAGE from '../../images/admins/amritaNair.jpg'
// import ASTHA_IMAGE from '../../images/admins/asthaChabra.jpeg'
// import GOWRI_IMAGE from '../../images/admins/gowriR.jpeg'
// import MAHIMA_IMAGE from '../../images/admins/mahimaMeenaxi.jpeg'
// import MANASA_IMAGE from '../../images/admins/manasaPoovayil.jpeg'
// import PARINISHTA_IMAGE from '../../images/admins/parinishtaT.jpg'
// import RAAGNI_IMAGE from '../../images/admins/raagniMalhotra.jpeg'
// import SARAH_IMAGE from '../../images/admins/sarahJacob.jpeg'
// import TANISHA_IMAGE from '../../images/admins/TanishaSudarshan.jpeg'
import { graphql, useStaticQuery } from 'gatsby'
import AboutCard from '../../molecules/AboutCard'

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
