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
	background-color: #fff;
	flex-direction: ${({ $flexDirection }) =>
		$flexDirection ? 'column' : 'row'};
	flex-basis: ${({ $flexBasis }) => ($flexBasis ? 'auto' : '100%')};
	min-width: ${({ $minWidth }) => ($minWidth ? '200px' : '820px')};
	max-width: ${({ $maxWidth }) => ($maxWidth ? '400px' : '820px')};
	min-height: ${({ $minHeight }) => ($minHeight ? '300px' : '0')};
	box-shadow: rgba(0, 0, 0, 0.5);

	@media screen and (min-width: 320px) and (max-width: 374px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		min-width: ${({ $minWidth }) => ($minWidth ? '270px' : '280px')};
		max-width: ${({ $maxWidth }) => ($maxWidth ? '270px' : '280px')};
	}
	@media screen and (min-width: 375px) and (max-width: 424px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		min-width: ${({ $minWidth }) => ($minWidth ? '300px' : '300px')};
		max-width: ${({ $maxWidth }) => ($maxWidth ? '300px' : '300px')};
	}
	@media screen and (min-width: 425px) and (max-width: 596px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		min-width: ${({ $minWidth }) => ($minWidth ? '350px' : '320px')};
		max-width: ${({ $maxWidth }) => ($maxWidth ? '350px' : '320px')};
	}

	@media screen and (min-width: 597px) and (max-width: 767px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		min-width: ${({ $minWidth }) => ($minWidth ? '200px' : '520px')};
		max-width: ${({ $maxWidth }) => ($maxWidth ? '400px' : '520px')};
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 100%;
		display: flex;
		min-width: ${({ $minWidth }) => ($minWidth ? '200px' : '220px')};
		max-width: ${({ $maxWidth }) => ($maxWidth ? '400px' : '620px')};
	}
`;
