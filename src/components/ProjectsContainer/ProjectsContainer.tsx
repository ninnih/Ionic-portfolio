import React from 'react'
import { IonCol, IonItem, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonRow } from '@ionic/react';
import './ProjectsContainer.scss'
import ProjectCard from './ProjectCard';
import CardData from './ProjectsData';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const ProjectsContainer = () => {

	return (
		<main className="main main--center">
			<IonSlides pager={true} options={slideOpts}>
				{ CardData.map((data:any, i:Number) => {
					return (
						<IonSlide>
							<ProjectCard card={data}/>
						</IonSlide>)
					}) }
			</IonSlides>
		</main>
	)
}

export default ProjectsContainer;