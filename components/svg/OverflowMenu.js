import React from 'react';

export default function OverflowMenu({ fill }) {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 86 405'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M43 319c23.748 0 43 19.252 43 43s-19.252 43-43 43-43-19.252-43-43 19.252-43 43-43zm0-160c23.748 0 43 19.252 43 43s-19.252 43-43 43-43-19.252-43-43 19.252-43 43-43zm.5-159C66.972 0 86 19.028 86 42.5S66.972 85 43.5 85 1 65.972 1 42.5 20.028 0 43.5 0z'
				fillRule='evenodd'
				fill={fill}
			/>
		</svg>
	);
}
