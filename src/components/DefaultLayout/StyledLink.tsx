import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps {
	$fontSize?: boolean;
	$color?: boolean;
	$hover?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
	font-size: ${({ $fontSize }) => ($fontSize ? '16px' : '10px')};
	color: ${({ $color }) => ($color ? '#333' : '#007bff')};
	margin-top: auto;

	&:hover {
		color: ${({ $hover }) => ($hover ? 'none' : '#0056b3')};
	}
`;
