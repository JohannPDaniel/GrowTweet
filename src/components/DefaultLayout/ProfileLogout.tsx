import { iconeLogoGrowdev } from '../../assets/Imagens/light_color';
import { ProfileLogoutStyled, PhotoProfileStyled } from './Styled';

interface ProfileLogoutProps {
	$flexDirection?: boolean;
	$fontSize?: boolean;
	$border?: boolean;
	$maxWidth?: boolean;
	$maxHeight?: boolean
}

export const ProfileLogout = ({
	$flexDirection,
    $fontSize,
    $border,
	$maxWidth,
	$maxHeight
}: ProfileLogoutProps) => {
	return (
		<ProfileLogoutStyled
			$flexDirection={$flexDirection}
			$fontSize={$fontSize}>
			<PhotoProfileStyled
				$border={$border}
				$maxWidth={ $maxWidth }
				$maxHeight={$maxHeight}
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
