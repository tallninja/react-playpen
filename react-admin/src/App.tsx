import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Users, Login, User, NewUser, NotFound } from './pages';
import { Navbar } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='users'>
						<Route index element={<Users />} />
						<Route path=':userId' element={<User />} />
						<Route path='new' element={<NewUser />} />
					</Route>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
