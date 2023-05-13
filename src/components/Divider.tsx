import styled from 'styled-components';
import { colors, sizes } from '../themes';

export const Divider = styled.hr`
	border-top: 2px solid ${colors.secondaryGreen};
	width: ${sizes.double};
  margin: ${sizes.one} auto;
`;
