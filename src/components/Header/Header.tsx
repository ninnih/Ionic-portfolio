import React from 'react'
import { IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Logo from '../../assets/images/logo.svg';
import { menuOutline } from 'ionicons/icons';
import { menuController } from '@ionic/core'

const Header = () => {

	const openMenu = () => {
		menuController.open();
	}
	return (
		<IonHeader>
			<IonToolbar>
				<IonButton onClick={openMenu} slot="end" fill="clear" color="maroon">
					<IonIcon icon={menuOutline} size="large"/>
				</IonButton>
				<img src={Logo} alt="" className="logo"/>
			</IonToolbar>
		</IonHeader>
	)
}

export default Header