import React, { useState } from 'react'
import Helmet from 'react-helmet'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

import AMRITA_IMAGE from '../images/admins/amritaNair.jpg'
import ASTHA_IMAGE from '../images/admins/asthaChabra.jpeg'
import GOWRI_IMAGE from '../images/admins/gowriR.jpeg'
import MAHIMA_IMAGE from '../images/admins/mahimaMeenaxi.jpeg'
import MANASA_IMAGE from '../images/admins/manasaPoovayil.jpeg'
import PARINISHTA_IMAGE from '../images/admins/parinishtaT.jpg'
import RAAGNI_IMAGE from '../images/admins/raagniMalhotra.jpeg'
import SARAH_IMAGE from '../images/admins/sarahJacob.jpeg'
import TANISHA_IMAGE from '../images/admins/TanishaSudarshan.jpeg'
import OurStory from '../templates/OurStory'

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

export default function About() {
	return (
		<section>
			<Helmet>
				<title>About - The Intersectional Feminist</title>
				<meta name='description' content={'About us page of the IF mag'} />
			</Helmet>
			<Header />
			<OurStory />
			<Footer />
		</section>
	)
}
