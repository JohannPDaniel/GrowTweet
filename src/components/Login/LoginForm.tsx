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

	form {
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

		> div {
			display: flex;
			flex-direction: column;

			label {
				font-size: 14px;
				color: #8897be;
			}

			input {
				width: 100%;
				max-width: 200px;
				padding: 8px;
				margin-top: 4px;
				border: 1px solid #ccc;
				border-radius: 8px;
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

		p {
			text-align: center;
			a {
				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
			}
		}
	}

	@media screen and (min-width: 320px) and (max-width: 374px) {
		width: 100%;
		border-radius: 0 0 7px 7px;

		h2 {
			font-size: 22px;
		}

		form {
			all: unset;
			display: flex;
			flex-direction: column;
			gap: 10px;

			> div input {
				width: 100%;
				max-width: 213px;
			}
		}

		p {
			font-size: 14px;
			a {
				font-size: 14px;

				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
			}
		}

		button {
			width: 100%;
		}
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		width: 100%;
		height: 280px;
		border-radius: 0 0 7px 7px;

		h2 {
			font-size: 22px;
		}

		form {
			all: unset;
			display: flex;
			flex-direction: column;
			gap: 10px;

			> div input {
				width: 100%;
				min-width: 233px;
			}
		}

		p {
			font-size: 14px;
			a {
				font-size: 14px;

				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
			}
		}

		button {
			width: 100%;
		}
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		width: 100%;
		height: 285px;
		border-radius: 0 0 7px 7px;

		h2 {
			font-size: 22px;
		}

		form {
			all: unset;
			display: flex;
			flex-direction: column;
			gap: 10px;

			> div input {
				width: 100%;
				min-width: 253px;
			}
		}

		p {
			font-size: 14px;
			a {
				font-size: 14px;

				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
			}
		}

		button {
			width: 100%;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 50%;
		border-radius: 0 7px 7px 0;

		h2 {
			font-size: 22px;
		}

		form {
			all: unset;
			display: flex;
			flex-direction: column;
			gap: 10px;

			> div input {
				width: 100%;
				min-width: 233px;
			}
		}

		p {
			font-size: 14px;
			a {
				font-size: 14px;

				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
			}
		}

		button {
			width: 100%;
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

		p {
			font-size: 16px;
			a {
				font-size: 16px;

				color: #0400ff;
				&:hover {
					color: #00bfff;
				}
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
