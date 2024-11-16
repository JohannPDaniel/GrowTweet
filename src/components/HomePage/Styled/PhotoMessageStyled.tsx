import styled from "styled-components";

export const PhotoMessageStyled = styled.div`
	display: flex;
	gap: 5px;
`;

export const MessageStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1px;

	> div {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	> div p {
		font-size: 14px;
		color: #555;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	> div p span {
		font-size: 12px;
		color: #333;
	}

	> p {
		font-size: 12px;
		color: #333;
	}
`;
