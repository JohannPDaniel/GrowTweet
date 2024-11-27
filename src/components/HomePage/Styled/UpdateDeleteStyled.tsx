import styled from 'styled-components';

interface UpdateDeleteProps {
	$display?: boolean;
}

export const UpdateDeleteStyled = styled.div<UpdateDeleteProps>`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: flex-end;

	img {
	all: unset;
		width: 100%;
		height: auto;
		max-width: 15px;
		filter: brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%)
			hue-rotate(180deg) brightness(93%) contrast(93%);
		cursor: pointer;
	}

	.dropdown-content {
		width: 160px;
		display: ${({ $display }) => ($display ? 'block' : 'none')};
		position: absolute;
		top: 15px;
		right: 10px;
		background-color: #f1f1f1;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		cursor: pointer;

		img {
			filter: invert(50%);
		}

		.dropdown-editar {
			width: 100%;
			display: flex;
			gap: 5px;
			color: black;
			padding: 12px 16px;

			p {
				color: black;
			}

			&:hover {
				background-color: #ddd;
			}
		}
	}
`;
