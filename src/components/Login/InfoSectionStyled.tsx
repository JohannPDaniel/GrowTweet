// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const InfoSectionStyled = styled.div`
	width: 55%;
	height: auto;
	padding: 12px 24px;
	border-radius: 7px 0 0 7px;

	background-color: #1d9bf0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;

	h1 {
		font-size: 32px;
		font-weight: 700;
		color: white;
	}

	small {
		color: white;
		font-size: 12px;
	}

	p {
		color: white;
		font-size: 16px;
	}

	@media (max-width: 767px) {
		display: none
	}
`;
