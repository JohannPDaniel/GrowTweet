import { iconeX } from '../../assets/Imagens/light_color';
import { Button } from '../DefaultLayout';
import { Box } from './Box';
import { Modal } from './Modal';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const UpsertModal = ({ isOpen, onClose }: UpsertModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<div>
				<img
					src={iconeX}
					alt='Icone de Fechar'
					onClick={onClose}
				/>
			</div>
			<Box
				name='message'
				placeholder='O que está acontecendo ?'></Box>
			<section>
				<Button $height={false}>Tweetar</Button>
			</section>
		</Modal>
	);
};
