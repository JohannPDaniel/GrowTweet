import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../config/services/auth.service';
import { getDataHeaders } from '../../config/utils/getDataHeaders';
import { ButtonStyled } from '../DefaultLayout/Styled';
import { LogoutModalStyled } from './LogoutModalStyled';
import { Modal } from './Modal';
import { ButtonSectionStyled } from './ModalStyled';

interface LogoutModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	// Função para executar o logout quando o botão "Sair" for clicado
	const handleLogout = useCallback(async () => {
		const dataHeaders = getDataHeaders();

		if (!dataHeaders) {
			alert('Dados de autenticação não encontrados.');
			return;
		}

		setLoading(true);

		try {
			const response = await logout(dataHeaders);
			setLoading(false);

			if (!response.success) {
				alert(response.message);
				return;
			}

			// Remove os dados de autenticação
			localStorage.removeItem('dataHeaders');
			sessionStorage.removeItem('dataHeaders');
			alert(response.message);

			// Redireciona para a página inicial
			navigate('/');
		} catch (error) {
			setLoading(false);
			alert('Erro ao realizar logout.');
		}
	}, [navigate]);

	return (
		<Modal
			$minWidth
			isOpen={isOpen}
			onClose={onClose}>
			<LogoutModalStyled>
				<h3>Deseja mesmo sair de sua conta?</h3>
				<ButtonSectionStyled $justifyContent='flex-end'>
					<ButtonStyled
						$theme='danger'
						onClick={onClose}>
						Cancelar
					</ButtonStyled>
					<ButtonStyled
						onClick={handleLogout} // Apenas clicando aqui executará o logout
						$theme='success'
						disabled={loading}>
						{loading ? 'Saindo...' : 'Sair'}
					</ButtonStyled>
				</ButtonSectionStyled>
			</LogoutModalStyled>
		</Modal>
	);
};
