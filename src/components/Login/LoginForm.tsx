import styled from 'styled-components';

export const LoginForm = styled.div`
	width: 100%;
	height: auto;
	padding: 24px 16px;
	background-color: #fff;
	border-radius: 0px 7px 7px 0;
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
			min-width: 200px;
			padding: 8px;
			margin-top: 4px;
			border: 1px solid #ccc;
			border-radius: 8px;
		}
	}

	h2 {
		font-size: 20px;
		color: #333333;
		font-weight: 700;
		text-align: center;
	}

	button {
		background-color: #1d9bf0;
		color: white;
		width: auto;
		padding: 8px;
		border: none;
		border-radius: 8px;
		margin-top: 5px;
		text-align: center;
		cursor: pointer;

		&:disabled {
			background-color: #ccc;
			cursor: progress;
		}
	}

	@media screen and (min-width: 320px) and (max-width: 374px) {
		width: 100%;
		border-radius: 0 0 7px 7px;

		div {
			input {
				min-width: 200px;
			}
		}

		button {
			min-width: 200px;
		}
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		width: 100%;
		height: 255px;

		border-radius: 0 0 7px 7px;

		h2 {
			font-size: 23px;
		}

		div {
			input {
				min-width: 230px;
			}
		}

		button {
			min-width: 230px;
		}
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		width: 100%;
		height: 265px;
		border-radius: 0 0 7px 7px;

		h2 {
			font-size: 25px;
		}

		div {
			input {
				min-width: 250px;
			}
		}

		button {
			min-width: 250px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 50%;
		border-radius: 0 7px 7px 0;

		h2 {
			font-size: 22px;
		}

		div {
			input {
				min-width: 220px;
			}
		}

		button {
			width: 84%;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		width: 50%;

		h2 {
			font-size: 25px;
		}

		div {
			input {
				min-width: 280px;
			}
		}

		button {
			width: 78%;
		}
	}

	@media screen and (min-width: 1440px) {
		width: 50%;
		border-radius: 0px 7px 7px 0;

		h2 {
			font-size: 25px;
		}

		div {
			input {
				min-width: 280px;
			}
		}

		button {
			width: 78%;
		}
	}
`;
