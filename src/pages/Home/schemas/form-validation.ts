import * as yup from 'yup';

const emailRules =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Name must be at least 3 characters long')
		.required('Required'),
	email: yup
		.string()
		.matches(emailRules, { message: 'Please enter a valid email' })
		.required('Required'),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref('email'), undefined], 'Emails must match')
		.required('Required'),
});
