import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.scss';
import Logo from '../assets/images/logo.svg';
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer';

const Projects: React.FC = () => {
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
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProjectsContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
