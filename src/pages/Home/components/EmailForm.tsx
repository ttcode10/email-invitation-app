import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { formSchema } from '../schemas/form-validation';
import { FormItem, OutlineButton } from '../../../components';
import { sizes } from '../../../themes';

export const EmailForm = () => {
	const onSubmit = async (values: any, actions: { resetForm: () => void }) => {
		alert(JSON.stringify(values));
		await new Promise((resolve) => setTimeout(resolve, 1000));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={{ userName: '', email: '', confirmEmail: '' }}
			validationSchema={formSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<FormItem name="userName" type="text" placeholder="Full name" />
					<FormItem name="email" type="email" placeholder="Email" />
					<FormItem
						name="confirmEmail"
						type="email"
						placeholder="Confirm email"
					/>
					<SubmitButton
						isDisabled={isSubmitting}
						isLoading={isSubmitting}
						type="submit"
					>
						Send
					</SubmitButton>
				</Form>
			)}
		</Formik>
	);
};

const SubmitButton = styled(OutlineButton)`
	width: 100%;
	margin-top: ${sizes.oneHalf};
`;
