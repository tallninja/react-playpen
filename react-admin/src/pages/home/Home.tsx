import './home.scss';
import { Sidebar, Navbar } from '../../components';

export const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<Navbar />
				<h1 className='title'>Home</h1>
			</div>
		</div>
	);
};
