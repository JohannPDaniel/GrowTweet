import styled from 'styled-components';

export const SideNavStyled = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	height: 20%;
	width: 100px;
	background-color: transparent;

	a {
		position: absolute;
		right: -60px;
		transition: right 0.3s ease-in-out;
		padding: 15px;
		width: 150px;
		text-decoration: none;
		font-size: 20px;
		color: white;
		border-radius: 5px 0px 0px 5px;
	}

	a:hover {
		right: 0;
	}

	.nav {
		top: 20px;
		background-color: #e57524;
	}

	.news {
		top: 80px;
		background-color: #243c5f;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
