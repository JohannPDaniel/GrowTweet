import styled from "styled-components";

interface PhotoProfileStyledProps {
	$border?: boolean;
	$maxWidth?: boolean;
	$maxHeight?: boolean;
}

export const PhotoProfileStyled = styled.img<PhotoProfileStyledProps>`
	width: 100%;
	height: auto;
	max-height: ${({$maxHeight}) => ($maxHeight ? "100px" : "45px")};
	max-width: ${({$maxWidth}) => ($maxWidth ? "100px" : "45px")};
	border-radius: 50%;
	border: ${({$border}) => ($border ? "6px solid black" : "none")};
`;