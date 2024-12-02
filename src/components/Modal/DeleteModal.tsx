import { useCallback, useState } from "react";
import { ButtonStyled } from '../DefaultLayout/Styled';
import { Modal } from './Modal';
import { ButtonSectionStyled } from './ModalStyled';
import { getDataHeaders } from "../../config/utils/getDataHeaders";
import { deleteTweet } from "../../config/services/tweet.service";

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
	tweetId: string;
	onTweetDeleted: (tweetId: string) => void;
}

export const DeleteModal = ({
	isOpen,
	onClose,
	tweetId,
	onTweetDeleted,
}: DeleteModalProps) => {
	const [loading, setLoading] = useState(false);

	const handleDeleteTweet = useCallback(async () => {
		const dataHeaders = getDataHeaders();

		if (!dataHeaders) {
			alert('Dados de autenticação não encontrados.');
			return;
		}

		setLoading(true);
		const response = await deleteTweet(tweetId, dataHeaders);
		setLoading(false);

		if (!response.success) {
			alert(response.message);
			return;
		}

		onTweetDeleted(tweetId);

		alert(response.message);
		onClose();
	}, []);

	return (
		<Modal
			$minWidth
			isOpen={isOpen}
			onClose={onClose}>
			<h3>Deseja mesmo excluir este tweet?</h3>
			<ButtonSectionStyled $justifyContent='flex-end'>
				<ButtonStyled
					$theme='danger'
					onClick={onClose}>
					Cancelar
				</ButtonStyled>
				<ButtonStyled
					onClick={handleDeleteTweet}
					$theme='success'
					disabled={loading}>
					{loading ? 'Excluindo...' : 'Excluir'}
				</ButtonStyled>
			</ButtonSectionStyled>
		</Modal>
	);
};
