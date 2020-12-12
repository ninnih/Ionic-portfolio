import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Links.css';
import Logo from '../assets/images/logo.svg';
import LinksContainer from '../components/LinksContainer/LinksContainer';

const Links: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <img src={Logo} alt="" className="logo"/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Links</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LinksContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Links;
