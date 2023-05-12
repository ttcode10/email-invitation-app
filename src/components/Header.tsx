import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../themes/';
import { Container } from './Container';
import { Logo } from './Logo';

export const Header = () => (
	<Wrapper>
		<Container>
			<Logo />
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	background-color: ${colors.white};
	width: 100%;
	height: ${sizes.triple};
	padding: ${sizes.one} 0;
	border-bottom: ${colors.borderGray} ${sizes.px} solid;
	box-sizing: content-box;
`;
