import styled from 'styled-components';


export const ContainerNewsStyled = styled.div`
	width: auto;
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

	@media screen and (max-width: 767px) {
		display: none;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 40%;
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		width: 30%;
	} 

	@media screen and (min-width: 1440px)  {
		width: 40%;
	}
`;
