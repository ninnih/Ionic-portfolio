import React, { FC } from 'react'
import { IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonIcon, IonItemDivider, IonItemGroup } from '@ionic/react';
import './AboutContainer.scss';
import Me from '../../assets/images/profile.png';
import { informationCircle, school, brush, location, happy, documentText, ellipse } from 'ionicons/icons';

const AboutContainer: React.FC = () => {
	return (
		<main>
			<IonGrid>
				<IonRow>
					<IonCol size="12" size-md="6">
						<article className="about about__Img">
							<img src={Me} alt="" className="profile"/>
						</article>
					</IonCol>
					<IonCol size="12" size-sm="6" size-md="3">
					<IonList>
						<IonListHeader lines="inset" color="bluewater">
							<IonLabel>Information</IonLabel>
						</IonListHeader>
						<IonItem>
							<IonIcon icon={informationCircle} color="maroon" size="small" slot="start"/>
							<IonLabel>Ninni Hagström</IonLabel>
						</IonItem>
						<IonItem>
							<IonIcon icon={location} color="maroon" size="small" slot="start"/>
							<IonLabel>Stockholm</IonLabel>
						</IonItem>
						<IonItem>
							<IonIcon icon={brush} color="maroon" size="small" slot="start"/>
							<IonLabel>Development, Design, Illustration</IonLabel>
						</IonItem>
						<IonItem>
							<IonIcon icon={happy} color="maroon" size="small" slot="start"/>
							<IonLabel className="ion-text-wrap">Art, nature, cooking, hiking, camping </IonLabel>
						</IonItem>
					</IonList>
					</IonCol>
					<IonCol>
						<section className="about about__something">
							<IonList>
								<IonListHeader color="bluewater">
									<IonLabel>Description</IonLabel>
								</IonListHeader>
								<article className="about__text">
									{/* <p>
										In the winter of 2018, I made my first life-changing decision and moved to Brighton, UK to study Digital Design where I graduated with distinction.
									</p>
									<p>
										During my time in Brighton, I studied graphic design, web development and design, UI/UX, marketing, advertising, public relations and e-commerce among others. The course gave me a wide and highly applicable set of skills for the digital market. It was also where my passion for coding and development was born.
									</p>
									<p>
										Which brings me to April 2020 where my journey into becoming a full-stack developer truly starts. I wanted to give it my all to become a Full-stack developer and decided to apply to salt’s Full Stack Web Development Bootcamp and was fortunate enough to be picked out of 1500 applicants.
									</p>
									<p>
										The Bootcamp has given me the opportunity to learn important skills within web development and the opportunity to truly deep dive into what Full Stack development is. I now have skills in JavaScript, HTML5, CSS, React, Node.js, Express, GIT, MongoDB, REST API, mob programming and agile work methods among others.
									</p> */}
									<p>
										As a developer and designer, I am passionate about human interaction and creating useful and well-thought products for my clients. I enjoy focusing on details as well as the bigger picture. Figuring out how a website or application works together with a marketing plan, branding and user needs is what I find the most fun. Having experience from graphic design, illustration and art makes front end, UI/UX and understanding the user where I truly thrive.
									</p>
									<IonButton color="maroon" expand="block" href="/projects">Read more</IonButton>
								</article>
							</IonList>
						</section>
					</IonCol>
				</IonRow>
			</IonGrid>
		</main>
	)
}

export default AboutContainer
