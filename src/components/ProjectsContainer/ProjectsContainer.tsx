import React, { useState, useEffect } from 'react'
import { IonCol, IonItem, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonSplitPane } from '@ionic/react';
import './ProjectsContainer.scss'
import ProjectCard from './ProjectCard';
import CardData from './ProjectsData';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const ProjectsContainer = () => {
	const [width, setWidth] = useState<Number>(window.innerWidth)

	const handleResize = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
	})

	return (
		<main className="main main--center">
			{ width < 768 ?
				<IonSlides pager={true} options={slideOpts}>
					{ CardData.map((data:any, i:Number) => {
						return (
							<IonSlide>
								<ProjectCard card={data}/>
							</IonSlide>)
						}) }
				</IonSlides>
				:
				<IonGrid>
					<IonRow class="ion-justify-content-center">
					{ CardData.map((data:any, i:Number) => {
						return (
							<IonCol size-md="6" size-lg="4" size-xl="3" >
								<ProjectCard card={data}/>
							</IonCol>
							)
						}) 
					}
					</IonRow>
				</IonGrid>
			}	
		</main>
	)
}

export default ProjectsContainer;