// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const NavStyled = styled.nav`
	width: 50%;
	height: auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 18px;

	>img:first-child {
		width: 100%;
		height: auto;
		max-width: 85px;
		margin-top: 20px;
		margin-left: 60px;
	}

`;