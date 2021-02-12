//The component displaying the different card scenerios
import React from 'react';
import Card from './Card';

export default function CardPage() {
	return (
		<div className='flex items-center justify-center'>
			<div className='md:grid md:grid-cols-2 gap-large py-large'>
				{/* The div handling the first and second card Scenerios*/}
				<div>
					<Card
						heading={'Countdown Announcement Spring/Summer 2021 Collection'}
						showMenu
						showStar
						subheading={'Last edited 2 days ago'}
						paddingBottom={'pb-small'}
						thumbnail={'/images/Supreme.jpg'}
						border={'border'}
						borderCol={'border-borderColor'}
					/>
				</div>

				{/* The div handling the third card Scenerio*/}
				<div>
					<Card
						heading={'Important Announcement'}
						paddingBottom={'pb-small'}
						subheading={'Last edited 4 days ago'}
						description={
							'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, andcontent'
						}
						border={'border'}
						borderCol={'border-borderColor'}
						showMenu
						showStar
					/>
				</div>

				{/* The div handling the fourth card Scenerio*/}
				<div>
					<Card
						heading={'Important Announcement'}
						paddingBottom={'pb-large'}
						subheading={'Last edited 4 hours ago'}
						border={'border'}
						borderCol={'border-borderColor'}
						showMenu
					/>
				</div>

				{/* The div handling the fifth card Scenerio*/}

				<div>
					<Card
						heading={'Important Announcement'}
						subheading={'Last edited 4 hours ago'}
						paddingBottom={'pb-small'}
					/>
				</div>
			</div>
		</div>
	);
}
