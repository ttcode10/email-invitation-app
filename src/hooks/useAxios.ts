import { useState } from 'react';
import { api } from '../apis';

export const useAxios = () => {
	const [response, setResponse] = useState();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const axiosFetch = async (fetchConfig: Props) => {
		const { method, url, payloads = {} } = fetchConfig;

		try {
			setLoading(true);
			const response = await api[method.toLowerCase()](url, {
				...payloads,
			});
			setResponse(response.data);
		} catch (error) {
			setError(error.response.data.errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const resetResponse = () => {
		setResponse(undefined);
	};

	const resetError = () => {
		setError('');
	};

	return { response, error, loading, resetResponse, resetError, axiosFetch };
};

interface Props {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	url?: string;
	payloads?: object;
}
