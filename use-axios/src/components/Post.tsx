import { useAxios } from '../hooks';
import { postApi } from '../api';

interface Post {
	id: number;
	body: string;
	joke: string;
}

export const Post: React.FC = () => {
	const [post, error, loading, refetch]: [Post, string, Boolean, Function] =
		useAxios({
			axiosInstance: postApi,
			url: '/posts/1',
			method: 'GET',
			requestConfig: {
				headers: {
					'Content-Language': 'en-US',
				},
			},
		});

	console.log('Mounted!');

	return (
		<div>
			<h1>Random Dad Jokes</h1>

			{loading && <p>Loading...</p>}

			{!loading && error && <p>{error}</p>}

			{!loading && !error && post && <p>{post?.body}</p>}

			{!loading && !error && !post && <p>No joke to display</p>}

			<button onClick={() => refetch()}>Refresh</button>
		</div>
	);
};
