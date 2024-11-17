import styled from 'styled-components';

export const ContainerContentStyled = styled.div`
	width: 45%;
	max-height: 100vh;
	overflow-y: auto;

	@media screen and (max-width: 480px) {
		width: 100%;
	}
	@media screen and (min-width: 480px) and (max-width: 767px) {
		width: 100%;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 60%;
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		width: 50%;
	}

	@media screen and (min-width: 1440px) and (max-width: 1900px) {
		width: 50%;
	}

	@media screen and (min-width: 1901px)  {
		width: 50%;
	}
`;
