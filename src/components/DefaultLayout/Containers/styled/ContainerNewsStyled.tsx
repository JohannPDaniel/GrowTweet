import styled from 'styled-components';

interface ContainerNewsProps {
	$isActive: boolean;
}

export const ContainerNewsStyled = styled.div<ContainerNewsProps>`
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
		position: fixed;
		top: 0;
		left: 0;
		width: 60%;
		height: 100vh;
		background-color: white;
		z-index: 1000;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		transform: ${({ $isActive }) =>
			$isActive ? 'translateX(0)' : 'translateX(-100%)'};
		transition: transform 0.3s ease-in-out;
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
