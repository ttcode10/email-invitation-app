import React from 'react';
import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { colors, colorScheme, sizes } from '../themes';
import styled from 'styled-components';
import { useField } from 'formik';

export const FormItem = ({ name, type, placeholder, ...props }: Props) => {
	const [field, meta] = useField(name);
	const isInvalid = meta.touched && !!meta.error;

	return (
		<Wrapper>
			<FormControl isInvalid={isInvalid}>
				<Input
					{...field}
					{...props}
					name={name}
					type={type}
					placeholder={placeholder}
					colorScheme={colorScheme}
					errorBorderColor={isInvalid ? colors.red : undefined}
					focusBorderColor={colors.secondaryGreen}
					htmlSize={100}
					value={field.value}
				/>
				{isInvalid && <FormErrorMessage>{meta.error}</FormErrorMessage>}
			</FormControl>
		</Wrapper>
	);
};

interface Props {
	name: string;
	type: string;
	placeholder: string;
	value?: string;
}

const Wrapper = styled.div`
	margin-bottom: ${sizes.one};
`;
