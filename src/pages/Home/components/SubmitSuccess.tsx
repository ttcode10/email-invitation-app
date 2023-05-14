import React from 'react';
import styled from 'styled-components';
import { MdText, OutlineButton } from '../../../components';
import { sizes } from '../../../themes';

export const SubmitSuccess = ({ onClose, clearLastResult }: Props) => {
	const handleClick = () => {
		clearLastResult();
		onClose();
	};

	return (
		<Wrapper>
			<SuccessHeading>
				You will be one of the first to experience Broccoli & Co. when we
				launch.
			</SuccessHeading>
			<OkButton onClick={handleClick}>OK</OkButton>
		</Wrapper>
	);
};

interface Props {
	onClose: () => void;
	clearLastResult: () => void;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SuccessHeading = styled(MdText)`
	text-align: center;
`;

const OkButton = styled(OutlineButton)`
	width: 100%;
	margin-top: ${sizes.triple};
`;
