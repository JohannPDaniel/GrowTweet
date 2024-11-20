import styled from 'styled-components';

export const LoginForm = styled.div`
	width: 50%;
	height: auto;
	padding: 24px 16px;
	background-color: #fff;
	border-radius: 0px 7px 7px 0;
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;

	@media screen and (min-width: 320px) and (max-width: 374px) {
		width: 100%;
		border-radius: 0 0 7px 7px;

	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		width: 100%;
		border-radius: 0 0 7px 7px;
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		width: 100%;
		border-radius: 0 0 7px 7px;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 50%;
		border-radius: 0 7px 7px 0;
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		width: 50%;
	}
`;
