import styled from 'styled-components';

export const ContainerNavStyled = styled.div`
	width: auto;
	height: auto;
	min-height: 100vh;
	border-right: 1px solid #e0e0e0;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;

	@media screen and (min-width: 320px) and (max-width: 374px) {
		display: none;
	}
	
	@media screen and (min-width: 375px) and (max-width: 480px) {
		display: none;
	}

	@media screen and (min-width: 481px) and (max-width: 767px) {
		display: none;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 30%;
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		width: 20%;
	}

	@media screen and (min-width: 1440px) {
		width: 30%;
	}
`;
