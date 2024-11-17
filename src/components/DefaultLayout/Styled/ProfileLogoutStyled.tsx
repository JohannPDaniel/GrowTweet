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
			font-size: ${({ $fontSize }) => ($fontSize ? '34px' : '12px')};
		}

		p:last-child {
			font-size: ${({ $fontSize }) => ($fontSize ? '14px' : '12px')};
			color: #828282;
			margin: 0;
		}
	}
`;
