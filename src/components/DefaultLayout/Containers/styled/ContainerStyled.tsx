import styled from 'styled-components';

export const ContainerStyled = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 767px) {
		flex-direction: column; /* No mobile, ajusta os elementos em coluna */
	}
`;
