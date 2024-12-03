import styled from 'styled-components';

interface ProfileLogoutProps {
	$flexDirection?: boolean;
	$fontSize?: boolean
	$maxW?: boolean
}

export const ProfileLogoutStyled = styled.div<ProfileLogoutProps>`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: ${({ $flexDirection }) =>
	$flexDirection ? 'column' : 'row'};
	gap: 5px;

	>div {
		min-width: 120px;
		p:first-child {
			font-size: ${( { $fontSize } ) => ( $fontSize ? '34px' : '14px' )};
			font-weight: 600;
			max-width: ${({$maxW}) => ($maxW ? "108px" : "100%")}	
		}

		p:last-child {
			font-size: ${({ $fontSize }) => ($fontSize ? '18px' : '14px')};
			color: #828282;
			margin: 0;
		}
	}
`;
