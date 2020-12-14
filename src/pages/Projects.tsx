import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.scss';
import Logo from '../assets/images/logo.svg';
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer';
import Header from '../components/Header/Header';

const Projects: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen color="light">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProjectsContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
