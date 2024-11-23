import { ButtonStyled } from '../DefaultLayout/Styled';
import { LogoutModalStyled } from './LogoutModalStyled';
import { Modal } from './Modal';
import { ButtonSectionStyled } from './ModalStyled';

export const LogoutModal = () => {
	return (
		<Modal
			$minWidth
			isOpen
			onClose={() => {}}>
			<LogoutModalStyled>
				<h3>Deseja mesmo sair de sua conta?</h3>
				<ButtonSectionStyled>
					<ButtonStyled $theme="danger">Cancelar</ButtonStyled>
					<ButtonStyled $theme="success">Sair</ButtonStyled>
				</ButtonSectionStyled>
			</LogoutModalStyled>
		</Modal>
	);
};
