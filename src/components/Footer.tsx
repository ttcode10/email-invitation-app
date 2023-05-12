import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../themes/';
import { Container } from './Container';
import { SmText } from './Typography';

export const Footer = () => (
	<Wrapper>
		<Container>
			<FootNote>Made with ♥ in Sydney.</FootNote>
			<FootNote>© 2023 Broccoli & Co. All rights reserved.</FootNote>
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

const FootNote = styled(SmText)`
	color: ${colors.secondaryGray};
`;
