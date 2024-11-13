// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const FormLogin = styled.div`
	width: 100%;
	height: auto;
	padding: 24px 16px;
	background-color: #fff;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
	}

	h2 {
		font-size: 24px;
		color: #333333;
	}
`;