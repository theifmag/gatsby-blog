import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import Helmet from 'react-helmet'
import Footer from '../components/footer'

import AMRITA_IMAGE from '../images/admins/amritaNair.jpg'
import ASTHA_IMAGE from '../images/admins/asthaChabra.jpeg'
import GOWRI_IMAGE from '../images/admins/gowriR.jpeg'
import MAHIMA_IMAGE from '../images/admins/mahimaMeenaxi.jpeg'
import MANASA_IMAGE from '../images/admins/manasaPoovayil.jpeg'
import PARINISHTA_IMAGE from '../images/admins/parinishtaT.jpg'
import RAAGNI_IMAGE from '../images/admins/raagniMalhotra.jpeg'
import SARAH_IMAGE from '../images/admins/sarahJacob.jpeg'
import TANISHA_IMAGE from '../images/admins/TanishaSudarshan.jpeg'

const teamData = [
	{
		imgUrl: AMRITA_IMAGE,
		name: 'Amrita S. Nair',
		shortText: `Amrita S. Nair is the founder of The Intersectional Feminist and The Silent Sexism Project. She is a final year Law student with a keen interest in Human Rights Law, Constitutional Law, and Gender Studies.`,
		readMore: `As the founder of the Silent Sexism Project, Amrita believes that sexism is deeply entrenched in our society and manifests itself in a myriad of ways, which must be challenged. As a Fauji child, Amrita has lived across the country, reveling in the glorious variety of Indian music, dance, and cuisine. When not championing the mentioned causes or honing the plethora of talents she has, she's usually found curled up with a book and some hot chocolate in a cozy nook.`,
	},
	{
		imgUrl: ASTHA_IMAGE,
		name: 'Astha Chhabra',
		shortText: `Astha is a budding engineer by profession who has always
    found herself inclined towards writing. A keen interest to
    speak up in support of feminism prompted her to create a
    platform to share her thoughts.`,
		readMore: `As a strong advocate of equality, Astha hopes to reach out
    to her readers and help them connect with her writing. As a
    pet parent, Astha also stands up for animal rights and
    encourages others to do so too. She's also equipped with
    graphic design skills and will be on IF magazine's design
    team.`,
	},
	{
		imgUrl: GOWRI_IMAGE,
		name: 'Gowri R.',
		shortText: `Currently in her fourth year of law school, Gowri is deeply
    interested in the overlapping of gender and law. She has
    also closely worked with the Gender Studies Committee at her
    college for three years now.`,
		readMore: `She currently heads as convenor of the committee for this
    academic year. In her remaining time, she's been actively
    pursuing art professionally with a particular interest in
    feminist art and will be a part of IF magazine's design
    team.`,
	},
	{
		imgUrl: MAHIMA_IMAGE,
		name: 'Mahima Meenaxi',
		shortText: `Mahima Meenaxi is a 22-year-old, hailing from Bengaluru and
    is currently pursuing her fifth year of a BA LLB course. As
    a feminist and an advocate of labour rights, she believes
    that gender discrimination is a result of deep-rooted class
    discrimination.`,
		readMore: `She also believes that gender justice is impossible to
    achieve without the ideological spread of intersectional
    feminism. She is an aspiring litigant with experience of
    practice in labour courts and tribunals. Her areas of
    research specialisation include Constitutional Law,
    Philosophy, Feminist Jurisprudence, and Competition Law
    amongst others. She is an avid reader, takes pleasure in
    writing opinion pieces, and analysing laws and policies. Her
    interests are varied, ranging from Carnatic music to
    painting. She is also a multi-linguistic poetess.`,
	},
	{
		imgUrl: MANASA_IMAGE,
		name: 'Manasa M Poovayil',
		shortText: `Manasa M Poovayil is a 26-year-old, thoroughbred
    Bengalurean. A graduate of Electronics and Communication
    Engineering, she is currently working as a technology
    consultant at Accenture.`,
		readMore: `She is a feminist who believes that feminism does not belong
    to just one gender. Her idea of feminism transcends labels
    of causes pertaining to any single sphere of the society and
    believes that feminism stands for all those who have
    experienced any kind of inequality, and more often than not,
    compounding effects of inequality due to different facets of
    their identity. A staunch advocate for inclusion and
    diversity, she believes that true liberation will come about
    when every human recognizes and accepts that differences are
    beautiful. Though hailing from the STEM community, Manasa
    has immense love for fine arts. She is a trained singer and
    dancer. She is a voracious reader and loves writing. She is
    a tree-hugger and a believer of minimalism.`,
	},
	{
		imgUrl: PARINISHTA_IMAGE,
		name: 'Parinishta T.',
		shortText: `Parinishta T. is a Communication and Media Studies graduate
    and currently works as an Online Media Executive. She
    believes in both creating and consuming media responsibly,
    having observed the kind of impact it has on people's
    psyches.`,
		readMore: `She likes analysing pop culture: movies, songs, literature,
    and other kinds of media in her spare time. She also loves
    basketball, sketching, and is an aspiring designer.`,
	},
	{
		imgUrl: RAAGNI_IMAGE,
		name: 'Raagni Malhotra',
		shortText: `Raagni is currently in her final year of an undergraduate
    program in International Criminal Justice at the City
    University of New York.`,
		readMore: `She also holds an Associate’s degree in Criminal Justice.
    Born a New Yorker, but raised between the U.S. and India,
    she brings a multicultural perspective on feminist issues to
    the table. She is especially passionate about studying
    gender-based violence and transnational crimes and hopes to
    conduct productive research about these issues as a scholar.
    In her little spare time, she can be found reading,
    attempting to learn another language, or fostering awareness
    about social issues in her community.`,
	},
	{
		imgUrl: SARAH_IMAGE,
		name: 'Sarah Jacob',
		shortText: `Sarah is a third-year design student at Srishti Bangalore.
    She loves to create and believes in the impact art and
    design can have on society.`,
		readMore: `When she isn't busy starting perpetual work in progress
    projects, she can be found daydreaming about her next bowl
    of ramen. Feminism to her is about inclusivity and passing
    the mic. She hopes to listen, observe, acknowledge her
    privilege when due, and initiate dialogue through her work.
    She thinks the world is a little bit messy like her and
    wonders if it could also use a few screaming mothers to
    clean it up.`,
	},
	{
		imgUrl: TANISHA_IMAGE,
		name: 'Tanisha Sudarshan',
		shortText: `Tanisha Sudarshan is an aspiring lawyer with a keen interest
    in human rights, sustainable development, and policy.`,
		readMore: `An avid reader, she also pens academic articles and poetry
    with the same ease. Tanisha is a firm believer in
    intersectionality and balance and hopes to contribute to the
    field through her work for the IF Magazine.`,
	},
]

export default function About(props) {
	return (
		<Layout>
			<Helmet>
				<title>About - The Intersectional Feminist</title>
				<meta name='description' content={'About us page of the IF mag'} />
			</Helmet>
			<Navbar />
			<div>
				<div
					className='ck_about_main_wrapper float_left'
					style={{
						marginBottom: '10vh',
					}}>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
								<div className='ck_about_img_wrapper float_left'>
									<img
										src={require('../images/about2.jpeg')}
										alt='about'
										style={{
											maxWidth: '500px',
										}}
									/>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center'>
								<div className='ck_about_img_cont_wrapper float_left'>
									<div className='ck_heading_wrapper ck_heading_wrapper2'>
										<h3>About Us</h3>
									</div>
									<p>
										<i> IF</i> is a pioneer online magazine dedicated
										exclusively to content relating to intersectional feminism.
										We are a group of young editors, writers, and illustrators
										from varied regional, cultural, and educational backgrounds.
										<br />
										<br />
										In our shared vision of an equal and equitable society, we
										aim to vocalise the role of discrimination on the basis of
										social constructs such as caste, class, gender, race, and
										religion. We are determined to represent varied
										geopolitical, ideological, and linguistic identities in the
										fight against patriarchal structures.
									</p>
									<br />
									<div id='demo99' class='collapse'>
										We are strong believers in freedom of expression and in
										pursuance of our beliefs, we will share content under a
										spectrum of areas. From current affairs to history, and
										including our areas of expertise in environmentalism,
										justice, laws and policies, multimedia, and STEM among other
										subjects, we're going to have something for everyone!
										<br />
										<br />
										<i> IF</i> is ambitious and hopes to be a significant entity
										in promoting a better future through inclusivity and
										feminism for everyone, regardless of their identities.
										<br />
										<i> Because IF not now, then when? </i>
										<br />
										<br />
									</div>
									<button
										type='button'
										class='btn btn-primary'
										data-toggle='collapse'
										data-target='#demo99'
										id='about-button'>
										Read More
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h3
					style={{
						color: '#953f73',
						textAlign: 'center',
						marginTop: '10vh',
						marginBottom: '10vh',
						fontSize: '38px',
						fontWeight: '500',
					}}>
					Meet the team
				</h3>

				<div
					className='container'
					style={{
						color: '#953f73',

						marginTop: '2vh',
						marginBottom: '10vh',
					}}>
					<div className='row'>
						{teamData.map(({ imgUrl, name, shortText, readMore }, key) => (
							<div
								className='col-md-6 col-lg-4 col-sm-12 card-margin'
								key={key}
								style={{
									marginTop: '5vh',
								}}>
								<div class='card'>
									<img class='card-img-top' src={imgUrl} alt='Card cap' />
									<div class='card-body'>
										<h5 class='card-title'>{name}</h5>
										<p class='card-text'>{shortText}</p>

										<br />
										<div id={'demo' + key} class='collapse'>
											{readMore}
										</div>
										<br />

										<button
											type='button'
											class='btn btn-primary'
											data-toggle='collapse'
											data-target={'#demo' + key}
											id='about-button'>
											Read More
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<Footer />
			</div>
		</Layout>
	)
}
