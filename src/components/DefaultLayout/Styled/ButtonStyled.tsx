import styled from 'styled-components';

interface ButtonProps {
	$maxWidth?: boolean;
	$height?: boolean;
	$marginTop?: boolean;
	$fontSize?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
	width: 100%;
	height: ${({ $height }) => ($height ? '32px' : '25px')};
	max-width: ${({ $maxWidth }) => ($maxWidth ? '160px' : '70px')};
	margin-top: ${({ $marginTop }) => ($marginTop ? '15px' : '10px')};
	font-size: ${( { $fontSize } ) => ( $fontSize ? "14px" : "10px" )};
	padding: 4px;
	border-radius: 25px;
	border: none;
	background-color: #1d9bf0;
	color: white;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		opacity: 85%;
	}
`;
