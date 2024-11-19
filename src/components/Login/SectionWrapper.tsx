import styled from "styled-components";

interface SectionWrapperProps {
	$minWidth?: boolean;
	$maxWidth?: boolean;
	$minHeight?: boolean;
	$flexBasis?: boolean;
	$flexDirection?: boolean;
}

export const SectionWrapper = styled.div<SectionWrapperProps>`
	width: 100%;
	height: auto;
	border-radius: 7px;
	display: flex;
	flex-direction: ${({ $flexDirection }) =>
		$flexDirection ? 'column' : 'row'};
	background-color: #fff;
	flex-basis: ${({ $flexBasis }) => ($flexBasis ? '250px' : '0')};
	min-width: ${({ $minWidth }) => ($minWidth ? '200px' : '820px')};
	max-width: ${({ $maxWidth }) => ($maxWidth ? '400px' : '820px')};
	min-height: ${({ $minHeight }) => ($minHeight ? '300px' : '0')};
	box-shadow: rgba(0, 0, 0, 0.5);

	@media screen and (min-width: 320px) and (max-width: 767px) {
		width: 80%;
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 80%;
	}
`;
