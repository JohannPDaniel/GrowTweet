import styled from 'styled-components';

export const NavStyled = styled.nav`
	width: 40%;
	height: auto;
	min-height: 100vh;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 20px;

	img:nth-child(1) {
		width: 100%;
		height: auto;
		max-width: 120px;
		object-fit: contain;
		margin-bottom: 20px;
	}

	img:nth-child(2) {
		width: 100%; 
		height: auto; 
		max-width: 10px;
		min-width: 10px;
		max-height: 10px;
		min-height: 10px;
	}

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 10px;
		color: #333;
		margin-top: 10px;

		&:hover {
			color: #1d9bf0;
		}
	}
`;
