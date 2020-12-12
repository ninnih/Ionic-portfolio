import React from 'react'
import { IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonIcon, IonItemDivider, IonItemGroup, IonRouterLink } from '@ionic/react';
import './LinksContainer.scss';
import { logoGithub, logoLinkedin, brush, link } from 'ionicons/icons';

const LinksContainer = () => {
	return (
		<main className="main main--center">
			<IonGrid>
				<IonRow class="ion-justify-content-center">
					<IonCol size="12" size-md="6" size-lg="4">
						<IonList>
							<IonListHeader color="bluewater">
								<IonLabel>Links</IonLabel>
							</IonListHeader>
							<IonItem>
								<IonIcon icon={logoGithub} color="maroon" size="large" slot="start"/>
								<IonButton expand="full" color="maroon">
									Github
								</IonButton>
							</IonItem>
							<IonItem>
								<IonIcon icon={logoLinkedin} color="maroon" size="large" slot="start"/>
								<IonButton expand="full" color="maroon">
									Linkedin
								</IonButton>
							</IonItem>
							<IonItem>
								<IonIcon icon={brush} color="maroon" size="large" slot="start"/>
								<IonButton expand="full" color="maroon">
									Portfolio
								</IonButton>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
			</IonGrid>
		</main>
	)
}

export default LinksContainer;
