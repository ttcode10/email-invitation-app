import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { formSchema } from '../schemas/form-validation';
import { ErrorText, FormItem, OutlineButton } from '../../../components';
import { sizes } from '../../../themes';

export const EmailForm = ({ handleSubmit, loading, error, clearError }: Props) => {
	return (
		<>
			<Formik
				initialValues={{ name: '', email: '', confirmEmail: '' }}
				validationSchema={formSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form onChange={clearError}>
						<FormItem name="name" type="text" placeholder="Full name" />
						<FormItem name="email" type="email" placeholder="Email" />
						<FormItem
							name="confirmEmail"
							type="email"
							placeholder="Confirm email"
						/>
						<SubmitButton
							isDisabled={loading}
							isLoading={loading}
							type="submit"
						>
							Send
						</SubmitButton>
						{error && <ServerError>{error}</ServerError>}
					</Form>
				)}
			</Formik>
		</>
	);
};

interface Props {
	handleSubmit: (
		values: object,
		actions: { resetForm: () => void }
	) => Promise<void>;
	loading: boolean;
	error: string;
	clearError: () => void;
}

const SubmitButton = styled(OutlineButton)`
	width: 100%;
	margin-top: ${sizes.oneHalf};
`;

const ServerError = styled(ErrorText)`
	margin-top: ${sizes.half};
	text-align: center;
`;
