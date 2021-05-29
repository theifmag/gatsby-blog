/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: require('./site-meta-data.json'),
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/_data`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
						},
					},
					{
						resolve: 'gatsby-remark-emojis',
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it. replace with yours
				trackingId: 'UA-180695114-1',
				head: true,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `The IF Mag Blog`,
				short_name: `IF Mag`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#d41776`,
				display: `standalone`,
				icon: 'src/images/banner/Logo.png',
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Playfair Display\:300,500,800`, `Montserrat\:300,500,800`],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: 'blurred',
					quality: 100,
					breakpoints: [640, 1024, 1366],
					backgroundColor: `transparent`,
				},
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
		'gatsby-plugin-use-query-params',
		`gatsby-remark-line-breaks`,
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
	],
}
