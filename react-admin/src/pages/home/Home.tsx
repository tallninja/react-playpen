import './home.scss';
import {
	Sidebar,
	Navbar,
	Widget,
	Featured,
	Chart,
	Table,
} from '../../components';

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
				<div className='charts'>
					<Featured />
					<Chart />
				</div>
				<div className='list-container'>
					<div className='list-title'>Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};
