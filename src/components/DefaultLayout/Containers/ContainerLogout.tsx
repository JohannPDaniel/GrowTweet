import { useState } from 'react';
import { LogoutModal } from '../../Modal/LogoutModal';
import { ProfileLogout } from '../ProfileLogout';
import { LogoutStyled } from '../Styled';
import { ContainerLogoutStyled } from './styled';
import { User } from '../../../config/types/User';
import { ContainerProfileStyled } from "./styled/ContainerProfileStyled";

interface ContainerLogosProps {
	user?: User;
}

const fallbackUser: User = {
	id: '',
	name: 'Usuário desconhecido',
	username: 'desconhecido',
	email: 'desconhecido@example.com',
	password: '',
	createdAt: new Date(),
};

export const ContainerLogout = ({ user }: ContainerLogosProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<ContainerLogoutStyled>
			<ContainerProfileStyled>
				<ProfileLogout
					$maxW
					user={user ?? fallbackUser}
				/>

				<LogoutStyled>
					<p onClick={closeModal}>Sair</p>
				</LogoutStyled>
				<LogoutModal
					isOpen={isOpen}
					onClose={closeModal}
				/>
			</ContainerProfileStyled>
		</ContainerLogoutStyled>
	);
};
