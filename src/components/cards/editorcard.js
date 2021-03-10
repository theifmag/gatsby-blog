import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostLink2 from '../post-link2'
import Slider from 'react-slick'

import './latestblogcard.css'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
}

export default function Editorcard() {
	return (
		<StaticQuery
			query={graphql`
				query editorCardQuery {
					allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
						limit: 6
					) {
						edges {
							node {
								id
								frontmatter {
									date(formatString: "MMMM DD, YYYY")
									path
									title
									thumbnail
									author
									category
									EditorChoice
								}
							}
						}
					}
				}
			`}
			render={(data) => (
				<center>
					<div className='container slide-show-container'>
						<div>
							<Slider {...settings}>
								{data.allMarkdownRemark.edges
									.filter((i) => i.node.frontmatter.EditorChoice)
									.map((item) => (
										<PostLink2 key={item.node.id} post={item.node} />
									))}
							</Slider>
						</div>
					</div>
				</center>
			)}
		/>
	)
}
