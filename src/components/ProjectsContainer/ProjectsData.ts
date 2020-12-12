import ImageOne from '../../assets/images/final-project.jpg';
import ImageTwo from '../../assets/images/creu-04.jpg';
import ImageThree from '../../assets/images/leaf.png';

interface dataObject {
	content: string,
	title: string,
	img: string
}

const cardData: Array<dataObject> = [
	{ 
		'content': 'In 2020 I made the decision to apply to salt and was picked out of 1500 applicants to go through their intense bootcamp. At salt I studied, JavaScript, Node.js, express.js, React, TDD and mob programming among others. Salt gave me the confidence and skills needed to be a flexible, valuable and highly motivated Full-Stack Developer able to provide high value right from the start.',
		'title': 'Development',
		'img': ImageTwo
	},
	{
		'content': 'As I designer I am well-versed with the Adobe CC package and I can design for both print and digital. Some of my skills are in bespoke branding including logos, icons, pampletes, posters and social media content. But my passion in design lays in UI/UX and figuring out smart solutions suitable for clients and their specific needs.',
		'title': 'Design',
		'img': ImageOne
	},
 {
	'content': 'For as long as I can remember I have had either a brush or pen in my hand. Creating, drawing, painting is a life long passion and my skills in it are many. I prefer to paint with watercolours and gouache, but also know how to paint with acrylics, oil and digitally. Allthough painting and drawing is mainly a personal interest of mine it has given me a natural sense and skill in colour and form which helps and guides my design and development decisions daily.',
	'title': 'Illustration',
	'img': ImageThree
 }
]

export default cardData;