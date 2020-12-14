import React from 'react'
import { IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonIcon, IonItemDivider, IonItemGroup, IonRouterLink } from '@ionic/react';
import './LinksContainer.scss';
import { logoGithub, logoLinkedin, brush } from 'ionicons/icons';

const LinksContainer = () => {
	return (
		<main className="main main--center">
			<IonGrid>
				<IonRow class="ion-justify-content-center">
					<IonCol size="12" size-md="6" size-lg="3">
						<IonList>
							<IonListHeader color="bluewater">
								<IonLabel>Links</IonLabel>
							</IonListHeader>
							<IonItem>
								<IonIcon icon={logoGithub} color="maroon" size="large" slot="start"/>
								<IonButton 
									fill="clear"
									href="https://github.com/ninnih"
									target="_blank">
									Github
								</IonButton>
								<IonLabel slot="end">@ninnih</IonLabel>
							</IonItem>
							<IonItem>
								<IonIcon icon={logoLinkedin} color="maroon" size="large" slot="start"/>
								<IonButton 
									fill="clear"
									href="https://www.linkedin.com/in/ninnihagstrom/"
									target="_blank">
									Linkedin
								</IonButton>
								<IonLabel slot="end">@ninnihagstrom</IonLabel>
							</IonItem>
							<IonItem>
								<IonIcon icon={brush} color="maroon" size="large" slot="start"/>
								<IonButton 
									fill="clear"
									href="http://ninnih-portfolio.herokuapp.com/"
									target="_blank">
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
