import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';

interface RequestConfigObj {
	axiosInstance: AxiosInstance;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	url: string;
	requestConfig: AxiosRequestConfig;
}

export const useAxios = (
	configObj: RequestConfigObj
): [any, string, Boolean, Function] => {
	const { axiosInstance, method, url, requestConfig } = configObj;

	const navigate = useNavigate();

	navigate('/vertical_section', { state: { formdef_data: null } });

	const effectRun = useRef(false);

	const [response, setResponse] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [reload, setReload] = useState(0);

	const refetch = () => setReload((prev) => prev + 1);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			try {
				const res = await axiosInstance(url, {
					...requestConfig,
					method: method.toLowerCase(),
					signal: abortController.signal,
				});
				console.log(res.data);
				setResponse(res.data);
			} catch (err) {
				console.log(err);
				if (err instanceof Error) setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (effectRun.current) {
			fetchData();
		}

		// useEffect cleanup function
		return () => {
			abortController.abort();
			effectRun.current = true;
		};
	}, [reload]);

	return [response, error, loading, refetch];
};
