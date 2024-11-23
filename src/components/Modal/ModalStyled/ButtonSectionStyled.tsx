import styled from 'styled-components';

interface ButtonSectionStyledProps {
	$flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const ButtonSectionStyled = styled.div<ButtonSectionStyledProps>`
	width: 100%;
	display: flex;
	flex-direction: ${({ $flexDirection }) => {
		switch ($flexDirection) {
			case 'row':
				return 'row';
			case 'row-reverse':
				return 'row-reverse';
			case 'column':
				return 'column';
			case 'column-reverse':
				return 'column-reverse';

			default:
				return 'row';
		}
	}};
	align-items: flex-end;
`;
