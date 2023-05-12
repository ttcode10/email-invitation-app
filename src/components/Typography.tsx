import React, { ReactNode } from 'react';
import { Heading as BaseHeading, Text as BaseText } from '@chakra-ui/react';
import { fontFamily } from '../themes';

export const H1Heading = ({ children, ...props }: Props) => (
	<BaseHeading as="h1" size="2xl" fontFamily={fontFamily} {...props}>
		{children}
	</BaseHeading>
);

export const H2Heading = ({ children, ...props }: Props) => (
	<BaseHeading as="h2" size="xl" fontFamily={fontFamily} {...props}>
		{children}
	</BaseHeading>
);

export const H3Heading = ({ children, ...props }: Props) => (
	<BaseHeading as="h3" size="lg" fontFamily={fontFamily} {...props}>
		{children}
	</BaseHeading>
);

export const H4Heading = ({ children, ...props }: Props) => (
	<BaseHeading as="h4" size="md" fontFamily={fontFamily} {...props}>
		{children}
	</BaseHeading>
);

export const XlText = ({ children, ...props }: Props) => (
	<BaseText fontSize="2xl" fontFamily={fontFamily} {...props}>
		{children}
	</BaseText>
);
export const LgText = ({ children, ...props }: Props) => (
	<BaseText fontSize="lg" fontFamily={fontFamily} {...props}>
		{children}
	</BaseText>
);
export const MdText = ({ children, ...props }: Props) => (
	<BaseText fontSize="md" fontFamily={fontFamily} {...props}>
		{children}
	</BaseText>
);
export const SmText = ({ children, ...props }: Props) => (
	<BaseText fontSize="sm" fontFamily={fontFamily} {...props}>
		{children}
	</BaseText>
);

interface Props {
	children?: ReactNode;
}
