import { ProfileLogout } from "../ProfileLogout";
import {
	LogoutStyled
} from '../Styled';
import { ContainerLogoutStyled } from './styled';

export const ContainerLogout = () => {
	return (
		<ContainerLogoutStyled>
			<ProfileLogout />
			
			<LogoutStyled>
				<p>Sair</p>
			</LogoutStyled>
		</ContainerLogoutStyled>
	);
};
