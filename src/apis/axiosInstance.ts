import axios from 'axios';

const BASE_URL =
	'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

export const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	headers: { 'Content-Type': 'application/json' },
});
