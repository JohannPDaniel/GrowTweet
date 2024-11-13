// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const Presentation = styled.div`
	width: 100%;
	height: auto;
	min-width: 507px;
	padding: 12px 24px;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;

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
		font-size: 16px
	}
`;
