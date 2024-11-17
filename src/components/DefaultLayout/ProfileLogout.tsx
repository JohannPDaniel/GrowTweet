import { iconeLogoGrowdev } from '../../assets/Imagens/light_color';
import { ProfileLogoutStyled, PhotoProfileStyled } from './Styled';

interface ProfileLogoutProps {
	$flexDirection?: boolean;
	$fontSize?: boolean;
	$border?: boolean;
	$maxWidth?: boolean;
}

export const ProfileLogout = ({
	$flexDirection,
    $fontSize,
    $border,
    $maxWidth
}: ProfileLogoutProps) => {
	return (
		<ProfileLogoutStyled
			$flexDirection={$flexDirection}
			$fontSize={$fontSize}>
			<PhotoProfileStyled
				$border={$border}
				$maxWidth={$maxWidth}
				src={iconeLogoGrowdev}
				alt='Logo Growdev'
			/>
			<div>
				<p>Growdev</p>
				<p>@Grow</p>
			</div>
		</ProfileLogoutStyled>
	);
};
