import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../themes/';
import { Container } from './Container';
import { SmText } from './Typography';

export const Footer = () => (
	<Wrapper>
		<Container>
			<SmText>Made with ♥ in Sydney.</SmText>
			<SmText>© 2023 Broccoli & Co. All rights reserved.</SmText>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	background-color: ${colors.white};
	width: 100%;
	height: ${sizes.triple};
	padding: ${sizes.one} 0;
	border-top: ${colors.borderGray} ${sizes.px} solid;
	box-sizing: content-box;
	text-align: center;
`;
