import { useState, useCallback } from 'react';
import { iconeX } from '../../assets/Imagens/light_color';
import { ButtonStyled } from '../DefaultLayout/Styled';
import { Modal } from './Modal';
import { ButtonSectionStyled, CloseModalStyled } from './ModalStyled';
import { BoxStyled } from './ModalStyled/BoxStyled';
import { createTweet } from '../../config/services/tweet.service';
import { getDataHeaders } from '../../config/utils/getDataHeaders';
import { TweetContent, TweetTypes } from '../../config/types/tweet.types';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onTweetCreated?: ((tweet: TweetTypes) => void) | undefined;
	type?: 'Tweet' | 'Reply';
}

export const UpsertModal = ({
	isOpen,
	onClose,
	onTweetCreated,
	type = 'Tweet',
}: UpsertModalProps) => {
	const [loading, setLoading] = useState<boolean>(false);
	const headers = getDataHeaders();

	const submitForm = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const body: TweetContent = {
				content: e.currentTarget.content.value.trim(),
				type,
			};

			setLoading(true);
			const response = await createTweet(body, headers);
			setLoading(false);

			if (!response.success) {
				alert(response.message);
				return;
			}

			if (response.data && onTweetCreated) {
				onTweetCreated(response.data); // Garante que apenas um TweetTypes válido será passado
			}

			onClose();
		},
		[type, headers, onTweetCreated, onClose]
	);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<form onSubmit={submitForm}>
				<CloseModalStyled>
					<img
						src={iconeX}
						alt='Icone de Fechar'
						onClick={onClose}
					/>
				</CloseModalStyled>
				<BoxStyled
					name='content'
					placeholder='O que está acontecendo?'
				/>
				<ButtonSectionStyled
					$alignItems='baseline'
					$justifyContent='flex-end'>
					<ButtonStyled
						type='submit'
						$height={false}
						disabled={loading}>
						{loading ? 'Enviando...' : 'Tweetar'}
					</ButtonStyled>
				</ButtonSectionStyled>
			</form>
		</Modal>
	);
};
