import React from 'react';
import styled from 'styled-components';
import { useDisclosure } from '@chakra-ui/react';
import {
	Container,
	H1Heading,
	LgText,
	OutlineButton,
	Modal,
} from '../../components';
import { sizes } from '../../themes';
import { EmailForm, SubmitSuccess } from './components';
import { useAxios } from '../../hooks';

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { response, error, loading, resetResponse, resetError, axiosFetch } =
		useAxios();

	const handleSubmit = async (
		values: object,
		actions: { resetForm: () => void }
	) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const { name, email } = values;

		axiosFetch({
			method: 'POST',
			payloads: {
				name: name,
				email: email,
			},
		});

		actions.resetForm();
	};

	const submitSuccess = response === 'Registered';

	return (
		<Content>
			<Container>
				<Wrapper>
					<H1Heading>A better way</H1Heading>
					<H1Heading>to enjoy every day.</H1Heading>
					<SubHeading>Be the first to know when we launch.</SubHeading>
					<OutlineButton onClick={onOpen} data-testid="requestEmailButton">
						Request an invite
					</OutlineButton>
					<Modal
						modalTitle={submitSuccess ? 'All done!' : 'Request an invite'}
						modalBody={
							submitSuccess ? (
								<SubmitSuccess
									onClose={onClose}
									clearLastResult={resetResponse}
								/>
							) : (
								<EmailForm
									handleSubmit={handleSubmit}
									loading={loading}
									error={error}
									clearError={resetError}
								/>
							)
						}
						isOpen={isOpen}
						onClose={onClose}
					/>
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
