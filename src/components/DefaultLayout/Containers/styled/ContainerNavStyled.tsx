import styled from 'styled-components';

interface ContainerNavProps {
	$isActive: boolean;
}

export const ContainerNavStyled = styled.div<ContainerNavProps>`
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
	@media screen and (min-width: 375px) and (max-width: 480px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 50%;
		height: 100vh;
		background-color: white;
		z-index: 1000;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		transform: ${({ $isActive }) =>
			$isActive ? 'translateX(0)' : 'translateX(-100%)'};
		transition: transform 0.3s ease-in-out;
	}

	@media screen and (min-width: 481px) and (max-width: 767px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 50%;
		height: 100vh;
		background-color: white;
		z-index: 1000;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		transform: ${({ $isActive }) =>
			$isActive ? 'translateX(0)' : 'translateX(-100%)'};
		transition: transform 0.3s ease-in-out;
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
