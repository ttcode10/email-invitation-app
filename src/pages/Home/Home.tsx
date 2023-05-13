import React from 'react';
import styled from 'styled-components';
import { useDisclosure } from '@chakra-ui/react';
import { Container, H1Heading, LgText, OutlineButton, Modal, FormItem } from '../../components';
import { sizes } from '../../themes';

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const Form = () => (
		<>
			<FormItem inputType="text" placeholder="Full name" isRequired={true} />
			<FormItem inputType="email" placeholder="Email" isRequired={true} />
			<FormItem inputType="email" placeholder="Confirm Email" isRequired={true} />
		</>
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
							modalBody={<Form />}
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
