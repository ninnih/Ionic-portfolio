import React from 'react';
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonRouterLink,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonContent,
  IonButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, shareSocial, personCircle, closeOutline } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';
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
import { menuController } from '@ionic/core'

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () =>{ 
	const closeMenu = () => {
		menuController.close()
	}

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet id="menuContent">
            <Route path="/about" component={About} exact={true} />
            <Route path="/links" component={Links} exact={true} />
            <Route path="/skills" component={Projects} />
            <Route path="/" render={() => <Redirect to="/about" />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="about" href="/about">
              <IonIcon icon={personCircle} color="maroon"/>
              <IonLabel color="maroon">About me</IonLabel>
            </IonTabButton>
            <IonTabButton tab="skills" href="/skills">
              <IonIcon icon={albums} color="maroon"/>
              <IonLabel color="maroon">Skills</IonLabel>
            </IonTabButton>
            <IonTabButton tab="links" href="/links">
              <IonIcon icon={shareSocial} color="maroon"/>
              <IonLabel color="maroon">Links</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      <IonMenu side="start" color="dark" contentId="menuContent">
          <IonHeader>
            <IonToolbar  color="bluewater">
              <IonTitle>Menu</IonTitle>
              <IonButton slot="end" fill="clear" size="large" onClick={closeMenu}>
                <IonIcon icon={closeOutline}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonIcon icon={personCircle} color="bluewater"  slot="start"/>
                <IonRouterLink href="/about">
                  <IonLabel color="bluewater">About me</IonLabel>
                </IonRouterLink>
              </IonItem>
              <IonItem>
                <IonIcon icon={albums} color="bluewater" slot="start"/>
                <IonRouterLink href="/skills">
                  <IonLabel color="bluewater">Skills</IonLabel>
                </IonRouterLink>
              </IonItem>
              <IonItem>
                <IonIcon icon={shareSocial} color="bluewater"  slot="start"/>
                <IonRouterLink href="/links">
                  <IonLabel color="bluewater">Links</IonLabel>  
                </IonRouterLink>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
    </IonApp>
    )
  }
;

export default App;
