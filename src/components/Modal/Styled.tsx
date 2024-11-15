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
`;
