import ReactDOM from 'react-dom';
import { ModalRoot, ModalContent } from './Styled';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null; 

	return ReactDOM.createPortal(
		<ModalRoot onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				{children}
			</ModalContent>
		</ModalRoot>,
		document.body // Garante que o modal é renderizado no body
	);
};
