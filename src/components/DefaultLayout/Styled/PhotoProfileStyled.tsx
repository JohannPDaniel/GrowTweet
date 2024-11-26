import styled from "styled-components";

interface PhotoProfileStyledProps {
	$border?: boolean;
	$maxWidth?: boolean;
	$maxHeight?: boolean;
}

export const PhotoProfileStyled = styled.img<PhotoProfileStyledProps>`
	width: 100%;
	height: auto;
	max-height: ${({$maxHeight}) => ($maxHeight ? "100px" : "40px")};
	max-width: ${({$maxWidth}) => ($maxWidth ? "100px" : "40px")};
	border-radius: 50%;
	border: ${({$border}) => ($border ? "6px solid black" : "none")};
`;