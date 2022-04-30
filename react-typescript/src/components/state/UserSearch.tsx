import React, { useEffect, useRef, useState } from 'react';

type User = {
	name: String;
	age: Number;
};

const users: User[] = [
	{ name: 'Ernest', age: 22 },
	{ name: 'Gloria', age: 20 },
	{ name: 'Joy', age: 50 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [result, setResult] = useState<User | undefined>();

	const inputRef = useRef<HTMLInputElement | null>(null);

	const search = () => {
		const foundUser = users.find((user) => user.name == name);
		setResult(foundUser);
	};

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	return (
		<>
			<h3>UserSearch</h3>
			<br />
			<input
				ref={inputRef}
				type='text'
				name='name'
				id='nameInput'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={search}>Search</button>
			<br />
			{result ? (
				<>
					<p>Name: {result.name}</p>
					<p>Age</p>
				</>
			) : null}
		</>
	);
};

export default UserSearch;
