import styled from 'styled-components';

interface ProfileLogoutProps {
	$flexDirection?: boolean;
	$fontSize?: boolean
}

export const ProfileLogoutStyled = styled.div<ProfileLogoutProps>`
	width: 100%;
	height: auto;
	max-width: 154px;
	display: flex;
	flex-direction: ${({ $flexDirection }) =>
		$flexDirection ? 'column' : 'row'};
	gap: 5px;

	div {
		p:first-child {
			font-size: ${( { $fontSize } ) => ( $fontSize ? '34px' : '14px' )};
			font-weight: 600;
		}

		p:last-child {
			font-size: ${({ $fontSize }) => ($fontSize ? '14px' : '14px')};
			color: #828282;
			margin: 0;
		}
	}
`;
