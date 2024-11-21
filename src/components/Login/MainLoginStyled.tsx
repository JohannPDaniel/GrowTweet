// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

interface MainLoginProps {
    $flexDirection?: boolean
}

export const MainLoginStyled = styled.div<MainLoginProps>`
	width: 100%;
	height: auto;
	min-height: 100vh;
	display: flex;
    flex-direction: ${({$flexDirection}) => ($flexDirection ? "column" : "row")};
	align-items: center;
	justify-content: center;
	background-color: #f2f2f2;
`;