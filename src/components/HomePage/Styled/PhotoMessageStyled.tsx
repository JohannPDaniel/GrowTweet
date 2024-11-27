import styled from 'styled-components';

export const PhotoMessageStyled = styled.div`
	width: 100%;
	display: flex;
	gap: 5px;
	margin-bottom: 5px;
`;

export const MessageStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1px;

	> p {
		width: 100%;
		font-size: 13px;
		color: #333;
		word-wrap: break-word; 
		overflow-wrap: break-word; 
		word-break: break-word;
		padding-right: 20px;
	}
`;
