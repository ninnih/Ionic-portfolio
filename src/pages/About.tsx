import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './About.scss';
import AboutContainer from '../components/AboutContainer/AboutContainer';
import Logo from '../assets/images/logo.svg';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <img src={Logo} alt="" className="logo"/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonHeader collapse="condense">
          <IonToolbar color="dark">
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
          <AboutContainer/>
      </IonContent>
    </IonPage>
  );
};

export default About;
