import { Link } from "react-router-dom";
import styled from 'styled-components';

export const News = styled.div`
	width: 100%;
    height: auto;
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	small {
		font-size: 10px;
		color: #828282;
	}

	p {
		font-size: 12px;
		color: #333333;
		font-weight: 700;
	}
`;

export const StyledLink = styled(Link)`
	font-size: 10px;
	color: #007bff;
    margin-top: auto;

	&:hover {
		color: #0056b3;
	}
`;
