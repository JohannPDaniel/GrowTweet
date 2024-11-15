import styled from 'styled-components';

export const ContainerNewsStyled = styled.div`
	width: 45%;
	height: auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	border-left: 1px solid #e0e0e0;
	padding: 25px;

	> div {
		width: 100%;
		height: auto;
		max-width: 250px;
		flex-basis: 210px; 
		border-radius: 5px;
		background-color: #e9e9e9;
		padding: 10px;
		display: flex;
		flex-direction: column; 
	}
`;
