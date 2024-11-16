import { iconeLogoGrowdev } from '../../../assets/Imagens/light_color';
import {
	Logout,
	PhotoProfileStyled,
	Profile,
} from '../../../components/DefaultLayout';
import { ContainerLogoutStyled } from './styled';

export const ContainerLogout = () => {
	return (
		<ContainerLogoutStyled>
			<Profile>
				<PhotoProfileStyled
					src={iconeLogoGrowdev}
					alt='Logo Growdev'
				/>
				<div>
					<p>Growdev</p>
					<p>@Grow</p>
				</div>
			</Profile>
			<Logout>
				<p>Sair</p>
			</Logout>
		</ContainerLogoutStyled>
	);
};
