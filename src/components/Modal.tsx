import React, { ReactNode } from 'react';
import {
	Modal as BaseModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { H4Heading } from './Typography';
import { sizes } from '../themes';
import { Divider } from './Divider';

export const Modal = ({
	modalTitle,
	modalBody,
	modalFooter,
	isOpen,
	onClose,
	...props
}: Props) => {
	return (
		<BaseModal isOpen={isOpen} onClose={onClose} {...props}>
			<ModalOverlay />
			<ModalContent>
				<MainWrapper>
					<ModalHeader>
						<StyledTitle>{modalTitle}</StyledTitle>
						<Divider />
					</ModalHeader>
					<ModalBody>{modalBody}</ModalBody>
					<ModalFooter>{modalFooter}</ModalFooter>
				</MainWrapper>
			</ModalContent>
		</BaseModal>
	);
};

interface Props {
	modalTitle: string;
	modalBody: ReactNode;
	modalFooter: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const StyledTitle = styled(H4Heading)`
	font-style: oblique;
	text-align: center;
`;

const MainWrapper = styled.div`
	padding: ${sizes.oneHalf} 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
