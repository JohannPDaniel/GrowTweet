import styled from 'styled-components';

interface NewsProps {
	$marginTop?: boolean;
}

export const NewsStyled = styled.div<NewsProps>`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-top: ${({ $marginTop }) => ($marginTop ? '12px' : '10px')};

	&:first-child {
		margin-top: 5px;
	}

	small {
		font-size: 10px;
		color: #828282;
	}

	p {
		font-size: 12px;
		color: #333333;
		font-weight: 700;
	}
`;
