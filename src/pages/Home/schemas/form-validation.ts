import * as yup from 'yup';

export const formSchema = yup.object().shape({
	userName: yup
		.string()
		.min(3, 'Username must be at least 3 characters long')
		.required('Required'),
	email: yup.string().email('Please enter a valid email').required('Required'),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref('email'), undefined], 'Emails must match')
		.required('Required'),
});
