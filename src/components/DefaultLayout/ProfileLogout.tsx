import { iconeLogoGrowdev } from '../../assets/Imagens/light_color';
import { User } from "../../config/types/User";
import { ProfileLogoutStyled, PhotoProfileStyled } from './Styled';

interface ProfileLogoutProps {
	$flexDirection?: boolean;
	$fontSize?: boolean;
	$border?: boolean;
	$maxWidth?: boolean;
	$maxW?: boolean;
	$maxHeight?: boolean
	user: User
}

	const fallbackUser: User = {
		id: '',
		name: 'Usuário desconhecido',
		username: 'desconhecido',
		email: 'desconhecido@example.com',
		password: '',
		createdAt: new Date(),
	};


export const ProfileLogout = ({
	$flexDirection,
    $fontSize,
    $border,
	$maxWidth,
	$maxW,
	$maxHeight,
	user
}: ProfileLogoutProps ) => {
	
	return (
		<ProfileLogoutStyled
			$maxW={$maxW}
			$flexDirection={$flexDirection}
			$fontSize={$fontSize}>
			<PhotoProfileStyled
				$border={$border}
				$maxWidth={$maxWidth}
				$maxHeight={$maxHeight}
				src={iconeLogoGrowdev}
				alt='Logo Growdev'
			/>
			<div>
				<p>{user.name ?? fallbackUser}</p>
				<p>@{user.username ?? fallbackUser}</p>
			</div>
		</ProfileLogoutStyled>
	);
};
