import styled from 'styled-components';

export const MessageTitleStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> div {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	> div p {
		font-size: 14px;
		color: #555;
		display: flex;
		gap: 5px;
	}

	> div p span {
		font-size: 12px;
		color: #333;
		display: flex;
		align-items: center;
	}

	@media screen and (min-width: 320px) and (max-width: 374px) {
		align-items: flex-start;

		> div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}

		> div p {
			margin-bottom: 5px;
		}

		> div strong {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		align-items: flex-start;

		> div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}

		> div p {
			margin-bottom: 5px;
		}

		> div strong {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		align-items: flex-start;

		> div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}

		> div p {
			margin-bottom: 5px;
		}

		> div strong {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		align-items: flex-start;

		> div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		> div p {
			margin-bottom: 5px;
		}

		> div strong {
			font-size: 18px;
		}
	}
`;
