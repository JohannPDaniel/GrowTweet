import styled from 'styled-components';

export const PhotoMessageStyled = styled.div`
	width: 100%;
	display: flex;
	gap: 5px;
`;

export const MessageStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1px;

	> div {
	}

	> p {
		font-size: 12px;
		color: #333;
	}
`;
