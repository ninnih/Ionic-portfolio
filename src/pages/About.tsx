import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './About.scss';
import AboutContainer from '../components/AboutContainer/AboutContainer';
import Header from '../components/Header/Header';

const About: React.FC = () => {
  return (
    <IonPage>
      <Header/>
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
