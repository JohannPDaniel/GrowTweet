import styled from 'styled-components';

export const ContentSignUp = styled.div`
	width: 100%;
	height: auto;
	background-color: #fff;
	padding: 20px;
	text-align: center;
	border-radius: 7px;

	h1 {
		padding-bottom: 10px;
	}

	div {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 5px;
	}

	label {
		width: 100%;
		height: auto;
		display: flex;
		margin-top: 10px;
	}

	div:first-of-type > label:first-of-type {
		margin-top: 0;
	}

	input {
		width: 100%;
		height: auto;
		padding: 8px;
		border-radius: 8px;
		border: 1px solid #e0e0e0;
		outline: none;
		transition: border-color 0.3s, box-shadow 0.3s;

		&:focus {
			border-color: #007bff;
			box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
		}
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: 10px;

		button:first-child {
			margin-top: 15px;
			padding: 10px;
			background-color: #ed1d1d;
			color: white;
			border: none;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				opacity: 85%;
			}
		}

		button:last-child {
			margin-top: 15px;
			padding: 10px;
			background-color: #14a714;
			color: white;
			border: none;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				opacity: 65%;
			}
		}
	}
`;
