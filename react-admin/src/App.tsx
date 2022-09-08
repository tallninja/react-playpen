import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, List, Login, Single } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='list' element={<List />} />
					<Route path='login' element={<Login />} />
					<Route path='single' element={<Single />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
