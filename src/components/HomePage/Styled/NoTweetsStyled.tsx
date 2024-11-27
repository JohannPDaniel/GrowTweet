import styled, { keyframes } from 'styled-components';

interface NoTweetsStyledProps {
	$minHeight?: boolean;
}

// Animação para o pulo e a transição de cores
const jumpAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
        color: #e57524; 
    }
    50% {
        transform: translateY(-10px); 
        color: #243c5f; 
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
		gap: 10px; 
		font-size: 2rem; 
		font-weight: bold;

		span {
			display: inline-block;
			animation: ${jumpAnimation} 0.8s ease-in-out infinite;
			animation-delay: calc(var(--i) * 0.1s); 
			transition: color 0.5s ease-out; 
		}
	}

    @media screen and (min-width: 320px) and (max-width: 375px) {
        .text {
            font-size: 1.5rem
        }
    }
`;
