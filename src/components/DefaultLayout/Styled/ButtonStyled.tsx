import styled from 'styled-components';

interface ButtonProps {
	$theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'default';
	$height?: boolean;
	$maxWidth?: boolean;
	$marginTop?: boolean;
	$fontSize?: boolean;
}
export const ButtonStyled = styled.button<ButtonProps>`
	width: 100%;
	height: ${({ $height }) => ($height ? '32px' : '25px')};
	max-width: ${({ $maxWidth }) => ($maxWidth ? '160px' : '70px')};
	margin-top: ${({ $marginTop }) => ($marginTop ? '15px' : '10px')};
	font-size: ${({ $fontSize }) => ($fontSize ? '14px' : '10px')};
	padding: 4px;
	border-radius: 25px;
	border: none;
	background-color: ${({ $theme }) => {
		switch ($theme) {
			case 'primary':
				return '#007BFF'; 
			case 'secondary':
				return '#6C757D'; 
			case 'success':
				return '#28A745'; 
			case 'danger':
				return '#DC3545'; 
			default:
				return '#007BFF'; 
		}
	}};
	color: white;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		opacity: 85%;
	}
`;
