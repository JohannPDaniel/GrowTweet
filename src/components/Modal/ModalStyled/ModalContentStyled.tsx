import styled from "styled-components";

interface ModalContentStyledProps {
	$minWidth?: boolean
}

export const ModalContentStyled = styled.div<ModalContentStyledProps>`
	background-color: white;
	padding: 14px;
	border-radius: 8px;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

	@media screen and (min-width: 320px) and (max-width: 374px) {
		min-width: 250px;
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		min-width: 300px;
	}

	@media screen and (min-width: 425px) and (max-width: 480px) {
		min-width: 350px;
	}

	@media screen and (min-width: 480px) {
		min-width: ${({ $minWidth }) => ($minWidth ? '300px' : '400px')};
	}
`;
