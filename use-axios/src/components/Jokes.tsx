import { useAxios } from '../hooks';
import { dadJokesApi } from '../api';

interface Joke {
	id: string;
	joke: string;
	status: number;
}

export const Jokes: React.FC = () => {
	const [joke, error, loading, refetch]: [Joke, string, Boolean, Function] =
		useAxios({
			axiosInstance: dadJokesApi,
			url: '/',
			method: 'GET',
			requestConfig: {
				headers: {
					'Content-Language': 'en-US',
				},
			},
		});

	return (
		<div>
			<h1>Random Dad Jokes</h1>

			{loading && <p>Loading...</p>}

			{!loading && error && <p>{error}</p>}

			{!loading && !error && joke && <p>{joke?.joke}</p>}

			{!loading && !error && !joke && <p>No joke to display</p>}

			<button onClick={() => refetch()}>Refresh</button>
		</div>
	);
};
