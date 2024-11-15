import { ModalRoot, ModalContent } from "./Styled";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	return (
		<>
			{isOpen ? (
				<ModalRoot onClick={onClose}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<div>{children}</div>
					</ModalContent>
				</ModalRoot>
			) : null}
		</>
	);
};
