import React from 'react';
import styled from 'styled-components';
import { useDisclosure } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import {
	Container,
	H1Heading,
	LgText,
	OutlineButton,
	Modal,
	FormItem,
} from '../../components';
import { sizes } from '../../themes';
import { formSchema } from './schemas/form-validation';

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onSubmit = async (values: any, actions: { resetForm: () => void; }) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		actions.resetForm();
	};

	const EmailForm = () => (
		<Formik
			initialValues={{ name: '', email: '', confirmEmail: '' }}
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
				</Form>
			)}
		</Formik>
	);

	const SubmitButton = () => <OutlineButton>Send</OutlineButton>;

	return (
		<Content>
			<Container>
				<Wrapper>
					<H1Heading>A better way</H1Heading>
					<H1Heading>to enjoy every day.</H1Heading>
					<SubHeading>Be the first to know when we launch.</SubHeading>
					<>
						<OutlineButton onClick={onOpen} data-testid="requestEmailButton">
							Request an invite
						</OutlineButton>
						<Modal
							modalTitle="Request an invite"
							modalBody={<EmailForm />}
							modalFooter={<SubmitButton />}
							isOpen={isOpen}
							onClose={onClose}
						/>
					</>
				</Wrapper>
			</Container>
		</Content>
	);
};

const Content = styled.div`
	flex-grow: 1;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20vh 0 20vh;
	text-align: center;
`;

const SubHeading = styled(LgText)`
	margin: ${sizes.double} 0;
`;

export default Home;
