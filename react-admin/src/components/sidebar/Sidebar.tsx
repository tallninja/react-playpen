import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import StatsIcon from '@mui/icons-material/Assessment';
import SystemHealthIcon from '@mui/icons-material/HealthAndSafety';
import ProfileIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import OrdersIcon from '@mui/icons-material/CreditCard';
import DeliveriesIcon from '@mui/icons-material/LocalShipping';
import ProductsIcon from '@mui/icons-material/Store';
import LogsIcon from '@mui/icons-material/ListAlt';

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<span className='logo'>Admin Panel</span>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='list-title'>MAIN</p>
					<li>
						<DashboardIcon className='icon' />
						<span>Dashboard</span>
					</li>
					<p className='list-title'>LISTS</p>
					<li>
						<PersonOutlineIcon className='icon' />
						<span>Users</span>
					</li>
					<li>
						<ProductsIcon className='icon' />
						<span>Products</span>
					</li>
					<li>
						<OrdersIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<DeliveriesIcon className='icon' />
						<span>Deliveries</span>
					</li>
					<p className='list-title'>USEFUL</p>
					<li>
						<StatsIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='list-title'>SERVICE</p>
					<li>
						<SystemHealthIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<LogsIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className='icon' />
						<span>Settings</span>
					</li>
					<p className='list-title'>USER</p>
					<li>
						<ProfileIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className='icon' />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className='color-option'></div>
				<div className='color-option'></div>
			</div>
		</div>
	);
};
