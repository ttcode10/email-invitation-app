import React, { ReactNode } from 'react';
import { Button as BaseButton } from '@chakra-ui/react';
import { colorScheme } from '../themes';

export const SolidButton = ({ children, ...props }: Props) => (
	<BaseButton colorScheme={colorScheme} variant="solid" {...props}>
		{children}
	</BaseButton>
);

export const OutlineButton = ({ children, onClick, ...props }: Props) => (
	<BaseButton colorScheme={colorScheme} variant="outline" onClick={onClick} {...props}>
		{children}
	</BaseButton>
);

export const GhostButton = ({ children, ...props }: Props) => (
	<BaseButton colorScheme={colorScheme} variant="ghost" {...props}>
		{children}
	</BaseButton>
);

export const LinkButton = ({ children, ...props }: Props) => (
	<BaseButton colorScheme={colorScheme} variant="link" {...props}>
		{children}
	</BaseButton>
);

interface Props {
	children?: ReactNode;
	onClick?: () => void;
}
