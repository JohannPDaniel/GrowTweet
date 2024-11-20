import styled from 'styled-components';

export const FormContentStyled = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	h2 {
		font-size: 20px;
		color: #333333;
		font-weight: 700;
	}

	.input-login {
		width: 100%;
		max-width: 280px;
		display: flex;
		flex-direction: column;
		align-items: center;

		label {
			font-size: 16px;
			color: #8897be;
			align-self: flex-start;
		}

		input {
			width: 100%;
			padding: 8px;
			margin-top: 4px;
			border: 1px solid #ccc;
			border-radius: 8px;
		}
	}

	.check-logged {
		width: 100%;
		height: auto;
		max-width: 280px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		label {
			font-size: 15px;
		}
	}

	p {
		text-align: center;
		font-size: 16px;

		a {
			color: #0400ff;

			&:hover {
				color: #00bfff;
			}
		}
	}

	button {
		width: 100%;
		max-width: 280px;
		background-color: #1d9bf0;
		color: white;
		padding: 8px;
		border: none;
		border-radius: 8px;
		margin-top: 5px;
		text-align: center;
		cursor: pointer;

		&:hover {
			opacity: 85%;
		}

		&:disabled {
			background-color: #ccc;
			cursor: progress;
		}
	}

	@media screen and (min-width: 320px) and (max-width: 374px) {
		.input-login {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 240px;
		}

		.check-logged {
			max-width: 240px;

			label {
				font-size: 14px;
			}
		}

		p {
			font-size: 14px;
		}

		button {
			max-width: 240px;
			font-size: 14px;
		}
	}
	@media screen and (min-width: 375px) and (max-width: 424px) {
		.input-login {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 240px;
		}

		.check-logged {
			max-width: 240px;

			label {
				font-size: 14px;
			}
		}

		p {
			font-size: 14px;
		}

		button {
			max-width: 240px;
			font-size: 14px;
		}
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		.input-login {
			max-width: 240px;
		}

		.check-logged {
			max-width: 230px;

			label {
				font-size: 14px;
			}
		}

		p {
			font-size: 14px;
		}

		button {
			max-width: 240px;
			font-size: 14px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		.input-login {
			max-width: 240px;
		}

		.check-logged {
			max-width: 230px;

			label {
				font-size: 14px;
			}
		}

		p {
			font-size: 14px;
		}

		button {
			max-width: 240px;
			font-size: 14px;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		.input-login {
			max-width: 280px;
		}

		.check-logged {
			max-width: 280px;

			label {
				font-size: 16px;
			}
		}

		p {
			font-size: 16px;
		}

		button {
			max-width: 280px;
		}
	}
`;
