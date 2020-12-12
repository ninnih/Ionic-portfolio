import React, { FC } from 'react'
import { IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonIcon, IonItemDivider, IonItemGroup } from '@ionic/react';
import './AboutContainer.scss';
import Me from '../../assets/images/profile.png';
import { informationCircle, school, brush, location, happy, documentText, ellipse } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const AboutContainer: React.FC = () => {
	const history = useHistory();
	return (
		<main className="main">
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
									<p>
										As a developer and designer, I am passionate about human interaction and creating useful and well-thought products for my clients. I enjoy focusing on details as well as the bigger picture. Figuring out how a website or application works together with a marketing plan, branding and user needs is what I find the most fun. Having experience from graphic design, illustration and art makes front end, UI/UX and understanding the user where I truly thrive.
									</p>
									<IonButton 
										color="maroon" 
										expand="block"
										onClick={(e) => {
											e.preventDefault();
											history.push('/skills')}}>
											Read more
									</IonButton>
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
