import styled, { keyframes } from 'styled-components';

interface NoTweetsStyledProps {
	$minHeight?: boolean;
}

const jumpAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px); 
    }
`;

export const NoTweetsStyled = styled.div<NoTweetsStyledProps>`
	width: 100%;
	height: auto;
	min-height: ${({ $minHeight }) => ($minHeight ? '40vh' : '90vh')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-block: 40px;

	.text {
		display: flex; 
		gap: 5px;
		font-size: 2.5rem; 
		font-weight: bold;

		span {
			display: inline-block;
			animation: ${jumpAnimation} 0.9s ease-in-out infinite;
			animation-delay: calc(var(--i) * 0.1s); 
		}
	}
`;
