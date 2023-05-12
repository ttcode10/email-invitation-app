import React from 'react';
import { Home } from './pages/Home';
import { Background, Footer, Header } from './components';
import styled from 'styled-components';

const App = () => (
	<Wrapper>
		<Header />
		<Home />
		<Footer />
	</Wrapper>
);

const Wrapper = styled(Background)`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export default App;
