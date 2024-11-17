import styled from 'styled-components';

export const ModalRoot = styled.div`
	position: fixed;
	inset: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
	background-color: white;
	padding: 14px;
	border-radius: 8px;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
	min-width: 400px;

	> div:first-child {
		display: flex;
		flex-direction: column;

		img {
			width: 100%;
			height: auto;
			max-width: 10px;
			cursor: pointer;
		}
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	
	@media screen and (min-width: 320px) and (max-width: 374px) {
		min-width: 250px;
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		min-width: 300px;
	}

	@media screen and (min-width: 425px) and (max-width: 480px) {
		min-width: 350px;
	}

	@media screen and (min-width: 480px) {
		min-width: 400px;
	}
`;
