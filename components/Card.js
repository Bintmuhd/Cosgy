//THE MAIN CARD COMPONENT

import { React, useState } from 'react';
import OverflowMenu from './svg/OverflowMenu';
import Star from './svg/Star';

function Card({
	heading,
	subheading,
	description,
	thumbnail,
	border,
	borderCol,
	paddingBottom,
	showMenu,
	showStar,
}) {
	//State to handle dropdown (clickaway)
	const [open, handleOpen] = useState(false);

	//State to Menu Icon on active color
	const [menu, setMenu] = useState(false);

	//State to Star Icon on active color
	const [star, setStar] = useState(false);

	return (
		<div
			className='border rounded-large border-borderColor my-large mx-large text-fontColor font-body'
			style={{ width: '300px' }}>
			<img src={thumbnail} />
			<div className='px-medium leading-medium'>
				<h3 className='w-11/12 overflow-hidden heading text-large pt-small'>
					{heading}
				</h3>
				<p className={`text-small pt-small ${paddingBottom}`}>{subheading}</p>
				<p className='text-small leading-small'>{description}</p>
				<div className='flex justify-between py-medium'>
					{/*Return for star icon function*/}
					<div
						onClick={() => {
							setStar((star) => !star);
						}}>
						{showStar && <Star fill={star ? '#2A2941' : 'white'} />}
					</div>

					{/*Return for Dropdown function*/}
					<div>
						<div onClick={() => handleOpen(!open)}>
							{/*Return for menu icon function*/}
							{showMenu && (
								<div
									onClick={() => {
										setMenu((menu) => !menu);
									}}
									className={` ${border} ${borderCol} ${
										menu ? 'bg-activeHover' : 'bg-white'
									}  cursor-pointer relative p-teeny rounded-small`}>
									<OverflowMenu fill={menu ? 'white' : 'fontColor'} />
								</div>
							)}

							{/*Dropdown options*/}
							{open && (
								<div className='absolute text-left border cursor-pointer text-small bg-textHover border-borderColor my-small '>
									<div className='hover:bg-activeHover hover:text-textHover pl-small pr-large'>
										Save
									</div>
									<div className='hover:bg-activeHover hover:text-textHover pl-small pr-large'>
										Edit
									</div>
									<div className='hover:bg-activeHover hover:text-textHover pl-small pr-large'>
										Preview
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
