import React from 'react';
import { Container, H1Heading, LgText, OutlineButton } from '../../components';
import styled from 'styled-components';
import { sizes } from '../../themes';

const Home = () => (
	<Content>
		<Container>
			<Wrapper>
				<H1Heading>A better way</H1Heading>
				<H1Heading>to enjoy every day.</H1Heading>
				<SubHeading>Be the first to know when we launch.</SubHeading>
				<OutlineButton>Request an invite</OutlineButton>
			</Wrapper>
		</Container>
	</Content>
);

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
`

export default Home;
