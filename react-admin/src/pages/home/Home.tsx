import './home.scss';
import { Sidebar, Navbar, Widget } from '../../components';

export const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<Navbar />
				<div className='widgets'>
					<Widget type='users' />
					<Widget type='orders' />
					<Widget type='earnings' />
					<Widget type='balance' />
				</div>
			</div>
		</div>
	);
};
