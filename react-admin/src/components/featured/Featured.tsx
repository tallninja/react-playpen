import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

export const Featured = () => {
	return (
		<div className='featured'>
			<div className='top'>
				<h1 className='title'>Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className='bottom'>
				<div className='featured-chart'>
					<CircularProgressbar value={60} text={'60%'} strokeWidth={3} />
				</div>
				<p className='title'>Total Sales Made Today</p>
				<p className='amount'>$420</p>
				<p className='description'>
					Previous transactions processing Last paymants may not be included
				</p>
				<div className='summary'>
					<div className='item'>
						<div className='item-title'>Target</div>
						<div className='item-result positive'>
							<ArrowUpwardOutlinedIcon fontSize='small' className='icon' />
							<div className='result-amount'>$12.5k</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-title'>Last Week</div>
						<div className='item-result positive'>
							<ArrowUpwardOutlinedIcon fontSize='small' className='icon' />
							<div className='result-amount'>$12.5k</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-title'>Last Month</div>
						<div className='item-result negative'>
							<ArrowDownwardOutlinedIcon fontSize='small' className='icon' />
							<div className='result-amount'>$12.5k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
