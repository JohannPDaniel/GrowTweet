import styled from 'styled-components';

export const EqualWidthNavigationStyled = styled.div`
	width: 100%;
	height: auto;
	min-height: 5vh;
	background-color: #243c5f;
	position: fixed;
	bottom: 0;
	display: flex;

	a {
		text-decoration: none;
		font-size: 17px;
		width: 25%;
		text-align: center;
		padding: 12px;
		background-color: #243c5f;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.3s;

		&:hover, &.active {
			background-color: #e57524;
		}

		&.active img {
			filter: invert(0); 
		}

		img {
			width: 100%;
			height: auto;
			max-height: 25px;
			filter: invert(1); 

			&:hover {
				filter: invert(0); 
			}
		}
	}

	@media screen and (max-width: 425px) {
		img {
			max-width: 25px;
		}
	}

	@media screen and (min-width: 767px) {
		display: none;
	}
`;
