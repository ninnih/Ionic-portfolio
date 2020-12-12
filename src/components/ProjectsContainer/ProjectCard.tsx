import React, { FC } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './ProjectCard.scss'
interface Props {
	card: any
}

const ProjectCard: FC<Props> = ({ card }) => {
	return (
		<IonCard>
			<img src={card.img} alt="" className="cardImage"/>
			<IonCardHeader color="bluewater">
				<IonCardTitle>{card.title}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<p>{card.content}</p>
			</IonCardContent>
		</IonCard>
	)
}

export default ProjectCard;