import React, { PropsWithChildren } from 'react';

interface ChildProps {
	color: string;
	onClick: () => void;
	children?: React.ReactNode;
}

// method 1
export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<>
			<h2>{color}</h2>
		</>
	);
};

// method 2
export const ChildAsFC: React.FC<ChildProps> = ({
	color,
	onClick,
	children,
}) => {
	return (
		<>
			<h2>{color}</h2>
			{children}
		</>
	);
};
