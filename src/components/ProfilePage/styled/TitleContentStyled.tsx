import styled from 'styled-components';

export const TitleContentStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 5px;
	margin-bottom: 75px;

	div:first-child {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	p:first-child {
		font-size: 14px;
	}

	p:last-child {
		font-size: 14px;
        font-weight: 300;
		color: #8a8282;
	}

	span {
		font-weight: bold;
	}

	img {
		width: 15px; 
		height: auto;
	}
`;
