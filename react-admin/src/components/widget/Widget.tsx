import './widget.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

interface WidgetProps {
	type: string;
}

type data = {
	title: string;
	isMoney: Boolean;
	link: string;
	icon: any;
};

export const Widget: React.FC<WidgetProps> = ({ type }) => {
	let data: data | null;

	switch (type) {
		case 'users':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'View all users',
				icon: (
					<PeopleOutlineOutlinedIcon
						className='widget-icon'
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(255, 0, 0, 0.2)',
						}}
					/>
				),
			};
			break;
		case 'orders':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: (
					<ShoppingCartOutlinedIcon
						className='widget-icon'
						style={{
							backgroundColor: 'rgba(218, 165, 32, 0.2)',
							color: 'goldenrod',
						}}
					/>
				),
			};
			break;
		case 'earnings':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View all earnings',
				icon: (
					<MonetizationOnOutlinedIcon
						className='widget-icon'
						style={{
							backgroundColor: 'rgba(0, 128, 0, 0.2)',
							color: 'green',
						}}
					/>
				),
			};
			break;
		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'Check balance',
				icon: (
					<AccountBalanceOutlinedIcon
						className='widget-icon'
						style={{
							backgroundColor: 'rgba(128, 0, 128, 0.2)',
							color: 'purple',
						}}
					/>
				),
			};
			break;
		default:
			data = null;
			break;
	}

	return (
		<div className='widget'>
			<div className='left'>
				<span className='title'>{data?.title}</span>
				<span className='counter'>{data?.isMoney && '$'} 1000</span>
				<span className='link'>{data?.link}</span>
			</div>
			<div className='right'>
				<div className='percentage positive'>
					<ArrowUpwardOutlinedIcon className='icon' />
					20%
				</div>
				{data?.icon}
			</div>
		</div>
	);
};
