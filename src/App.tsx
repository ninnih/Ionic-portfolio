import React from 'react';
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, shareSocial, personCircle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import About from './pages/About';
import Links from './pages/Links';
import Projects from './pages/Projects';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/about" component={About} exact={true} />
          <Route path="/links" component={Links} exact={true} />
          <Route path="/projects" component={Projects} />
          <Route path="/" render={() => <Redirect to="/about" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={personCircle} color="bluewater"/>
            <IonLabel color="bluewater">About me</IonLabel>
          </IonTabButton>
          <IonTabButton tab="links" href="/links">
            <IonIcon icon={shareSocial} color="bluewater"/>
            <IonLabel color="bluewater">Links</IonLabel>
          </IonTabButton>
          <IonTabButton tab="projects" href="/projects">
            <IonIcon icon={albums} color="bluewater"/>
            <IonLabel color="bluewater">Projects</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
