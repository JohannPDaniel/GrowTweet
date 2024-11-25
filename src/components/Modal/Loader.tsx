import styled from 'styled-components';

export const Loader = styled.div`
		width: 120px;
		height: 20px;
		border-radius: 20px;
		background: repeating-linear-gradient(
					135deg,
					#f03355 0 10px,
					#ffa516 0 20px
				)
				0/0% no-repeat,
			repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
		animation: l3 2s infinite;
	@keyframes l3 {
		100% {
			background-size: 100%;
		}
	}
`;
