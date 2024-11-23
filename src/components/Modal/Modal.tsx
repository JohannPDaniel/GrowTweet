import { ModalRootStyled, ModalContentStyled } from "./ModalStyled";

interface ModalProps {
	isOpen: boolean;
	$minWidth?: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, $minWidth, onClose, children }: ModalProps) => {
	return (
		<>
			{isOpen ? (
				<ModalRootStyled onClick={onClose}>
					<ModalContentStyled $minWidth={$minWidth} onClick={(e) => e.stopPropagation()}>
						{children}
					</ModalContentStyled>
				</ModalRootStyled>
			) : null}
		</>
	);
};
