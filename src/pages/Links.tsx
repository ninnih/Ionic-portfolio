import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Links.css';
import Logo from '../assets/images/logo.svg';
import LinksContainer from '../components/LinksContainer/LinksContainer';
import Header from '../components/Header/Header';

const Links: React.FC = () => {
  return (
    <IonPage>
      <Header/>

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
