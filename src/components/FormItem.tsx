import React from 'react';
import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { colors, colorScheme, sizes } from '../themes';
import styled from 'styled-components';

export const FormItem = ({
	inputType,
	placeholder,
	value,
	isRequired,
	isInvalid,
	errorMessage,
}: Props) => (
	<Wrapper>
		<FormControl isRequired={isRequired} isInvalid={isInvalid}>
			<Input
				type={inputType}
				placeholder={placeholder}
				isInvalid={isInvalid}
				errorBorderColor={isInvalid ? colors.red : undefined}
				colorScheme={colorScheme}
				focusBorderColor={colors.secondaryGreen}
				htmlSize={100}
				value={value}
			/>
			{isInvalid && errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
		</FormControl>
	</Wrapper>
);

interface Props {
	inputType: string;
	placeholder: string;
	isRequired: boolean;
	isInvalid?: boolean;
	errorMessage?: string;
	value?: string;
}

const Wrapper = styled.div`
	margin-bottom: ${sizes.one};
`;
