// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const ContainerLogos = styled.div`
	display: flex;
	flex-direction: column;

	> img {
		width: 100%;
		height: auto;
		max-width: 80px;
		margin-left: 10px;
	}

	div {
		margin-top: 10px;
	}
`;
