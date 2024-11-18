import styled from "styled-components";

export const SectionWrapper = styled.div`
	width: 100%;
	height: auto;
	max-width: 820px;
	min-height: 300px;
	border-radius: 7px;
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.5);

	@media screen and (min-width: 320px) and (max-width: 767px) {
		width: 80%;
		display: flex;
		flex-direction: column
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		width: 80%
	}
`;
