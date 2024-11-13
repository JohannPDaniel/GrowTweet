// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const ContainerStyled = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	> div {
		width: 100%;
		height: auto;
		min-height: 100vh;
	}
`;
