import React, { useState } from 'react';

const GuestList: React.FC = () => {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);

	const addGuest = () => {
		setName('');
		setGuests([...guests, name]);
	};

	return (
		<>
			<h3>Guest List</h3>
			<ul>{guests.length ? guests.map((guest) => <li>{guest}</li>) : null}</ul>
			<br />
			<input
				type='text'
				name='name'
				id='nameInput'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={addGuest}>Add Guest</button>
		</>
	);
};

export default GuestList;
