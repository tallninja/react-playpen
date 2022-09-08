import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='search' />
					<SearchIcon className='icon' />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageIcon className='icon' />
						English
					</div>
					<div className='item'>
						<DarkModeOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<FullscreenExitIcon className='icon' />
					</div>
					<div className='item'>
						<NotificationsNoneOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ChatBubbleOutlineOutlinedIcon className='icon' />
						<div className='counter'>2</div>
					</div>
					<div className='item'>
						<ListOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<img
							src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-personal-training-697509.jpg&fm=jpg'
							alt='profile'
							className='avatar'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
