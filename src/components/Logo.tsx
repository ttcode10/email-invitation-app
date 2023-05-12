import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/logo.svg';
import { colors, sizes } from '../themes';
import { H4Heading } from './Typography';

export const Logo = () => (
	<Wrapper onClick={() => window.location.reload()}>
		<CompanyLogo />
		<CompanyName>BROCCOLI & CO.</CompanyName>
	</Wrapper>
);

const Wrapper = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const CompanyLogo = styled(Icon)`
	height: ${sizes.triple};
	margin-right: ${sizes.half};
`;

const CompanyName = styled(H4Heading)`
	color: ${colors.primaryGreen};
`;
