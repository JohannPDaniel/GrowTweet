import { useState } from 'react';
import { LogoutModal } from '../../Modal/LogoutModal';
import { ProfileLogout } from '../ProfileLogout';
import { LogoutStyled } from '../Styled';
import { ContainerLogoutStyled } from './styled';

export const ContainerLogout = () => {
	const [ isOpen, setIsOpen ] = useState( false );
	const closeModal = () => {
		setIsOpen(!isOpen);
	};


	return (
		<ContainerLogoutStyled>
			<ProfileLogout />

			<LogoutStyled>
				<p onClick={closeModal}>Sair</p>
			</LogoutStyled>
			<LogoutModal
				isOpen={isOpen}
				onClose={closeModal}
			/>
		</ContainerLogoutStyled>
	);
};
