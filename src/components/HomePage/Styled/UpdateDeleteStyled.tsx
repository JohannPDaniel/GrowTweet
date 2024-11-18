import styled from 'styled-components';

interface UpdateDeleteProps {
	$display?: boolean;
}

export const UpdateDeleteStyled = styled.div<UpdateDeleteProps>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: auto;
	height: auto;

	img {
		width: 100%;
		height: auto;
		max-width: 15px;
		filter: brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%)
			hue-rotate(180deg) brightness(93%) contrast(93%);
		cursor: pointer;
	}

	.dropdown-content {
		display: ${({ $display }) => ($display ? 'block' : 'none')};
		position: absolute;
		top: 70px;
		right: 530px;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		cursor: pointer;

		img {
			filter: invert(50%);
		}

		.dropdown-editar {
			display: flex;
			gap: 5px;

			p {
				color: black;
			}
		}
	}

	.dropdown-content div {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content div:hover {
		background-color: #ddd;
	}

	@media screen and (min-width: 320px) and (max-width: 374px) {
		.dropdown-content {
			right: 22px;
		}
	}

	@media screen and (min-width: 375px) and (max-width: 424px) {
		.dropdown-content {
			right: 30px;
		}
	}

	@media screen and (min-width: 425px) and (max-width: 767px) {
		.dropdown-content {
			right: 30px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		.dropdown-content {
			right: 265px;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1439px) {
		.dropdown-content {
			right: 320px;
		}
	}

	@media screen and (min-width: 1440px)  {
		.dropdown-content {
			right: 550px;
		}
	}
`;
