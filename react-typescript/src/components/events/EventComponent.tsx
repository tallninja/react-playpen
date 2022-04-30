import React from 'react';

const EventComponent: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<>
			<input type='text' onChange={onChange} />
		</>
	);
};

export default EventComponent;
