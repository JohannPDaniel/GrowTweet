// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const LoginForm = styled.div`
	width: 45%;
	height: auto;
	padding: 24px 16px;
	background-color: #fff;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;

		label {
			font-size: 14px;
			color: #8897be;
		}

		input {
			width: 100%;
			min-width: 250px;
			padding: 8px;
			margin-top: 4px;
			border: 1px solid #ccc;
			border-radius: 8px;
		}
	}

	h2 {
		font-size: 24px;
		color: #333333;
		font-weight: 700;
	}

	button {
		background-color: #1d9bf0;
		color: white;
		width: 74.5%;
		padding: 8px;
		border: none;
		border-radius: 8px;
		margin-top: 5px;
		cursor: pointer;

		&:disabled {
			background-color: #ccc;
			cursor: progress
		}
	}
`;
