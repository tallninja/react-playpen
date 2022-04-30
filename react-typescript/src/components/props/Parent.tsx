import React from 'react';
import { Child, ChildAsFC } from './Child';

const Parent = () => {
	return (
		<>
			<Child color='red' onClick={() => console.log('clicked')} />
		</>
	);
};

export default Parent;
