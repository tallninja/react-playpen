import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions, useTypedSelector } from '../hooks';
import { RootState } from '../state';

const App: React.FC = () => {
	const [term, setTerm] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const { loading, data, error } = useTypedSelector(
		(state) => state.repositories
	);

	const { searchRepositories } = useActions();

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(term);
		searchRepositories(term);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<h2>Search Repositories</h2>
				<input ref={inputRef} type='text' value={term} onChange={onChange} />
				<button type='submit'>Search</button>
				{error && <h3>{error}</h3>}
				{loading && <h3>Loading...</h3>}
				{data && (
					<ul>
						{data.map((repo, idx) => (
							<li key={idx}>{repo}</li>
						))}
					</ul>
				)}
			</form>
		</>
	);
};

export default App;
