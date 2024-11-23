import { iconeX } from '../../assets/Imagens/light_color';
import { ButtonStyled } from '../DefaultLayout/Styled';
import { Modal } from './Modal';
import { ButtonSectionStyled, CloseModalStyled } from './ModalStyled';
import { BoxStyled } from './ModalStyled/BoxStyled';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const UpsertModal = ({ isOpen, onClose }: UpsertModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<CloseModalStyled>
				<img
					src={iconeX}
					alt='Icone de Fechar'
					onClick={onClose}
				/>
			</CloseModalStyled>
			<BoxStyled
				name='message'
				placeholder='O que está acontecendo ?'></BoxStyled>
			<ButtonSectionStyled $justifyContent='flex-end'>
				<ButtonStyled $height={false}>Tweetar</ButtonStyled>
			</ButtonSectionStyled>
		</Modal>
	);
};
