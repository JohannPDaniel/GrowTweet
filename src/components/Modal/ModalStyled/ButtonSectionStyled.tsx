import styled from 'styled-components';

interface ButtonSectionStyledProps {
	$flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	$justifyContent?:
		| 'flex-end'
		| 'flex-start'
		| 'center'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'initial';
	$alignItems?: 'flex-end' | 'flex-start' | 'center' | 'initial';
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
	justify-content: ${({ $justifyContent }) => {
		switch ($justifyContent) {
			case 'flex-end':
				return 'flex-end';
			case 'flex-start':
				return 'flex-start';
			case 'center':
				return 'center';
			case 'space-around':
				return 'space-around';
			case 'space-between':
				return 'space-between';
			case 'space-evenly':
				return 'space-evenly';
			default:
				return 'initial';
		}
	}};
	align-items: ${({ $alignItems }) => {
		switch ($alignItems) {
			case "flex-end":
				return "flex-end"
			case "flex-start":
				return "flex-start"
			case "center":
				return "center"

			default:
				return "initial"
		}
}};
	gap: 10px;
`;
