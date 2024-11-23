import { LogoutModal } from "../../Modal/LogoutModal";
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
				<p onClick={() => {}}>Sair</p>
			</LogoutStyled>
			<LogoutModal />
		</ContainerLogoutStyled>
	);
};
