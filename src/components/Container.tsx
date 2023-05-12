import React, { ReactNode } from 'react';
import { Container as BaseContainer } from '@chakra-ui/react';

export const Container = ({ children }: Props) => (
	<BaseContainer maxW="container.xl">{children}</BaseContainer>
);

interface Props {
	children?: ReactNode;
}
