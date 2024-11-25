import styled from 'styled-components';

interface ModalRootStyledProps {
	$backColor?: 'white' | 'black';
}

export const ModalRootStyled = styled.div<ModalRootStyledProps>`
	position: fixed;
	inset: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(4px);
	background-color: ${({ $backColor }) => {
		switch ($backColor) {
			case 'white':
				return 'rgba(255,255,255,0.2)';
			case 'black':
				return 'rgba(0, 0, 0, 0.5)';
			default:
				return 'rgba(0, 0, 0, 0.5)';
		}
	}};
`;
