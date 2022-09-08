import './home.scss';
import { Sidebar } from '../../components';

export const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<h1 className='title'>Home</h1>
			</div>
		</div>
	);
};
