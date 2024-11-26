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
	onTweetCreated: (data: TweetTypes[]) => void;
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
				type, // Define o tipo do tweet automaticamente
			};

			if (!body.content) {
				alert('O conteúdo do tweet é obrigatório!');
				return;
			}

			setLoading(true);

			try {
				const response = await createTweet(body, headers);
				if (!response.success) {
					alert(response.message);
					return;
				}

				onTweetCreated(response.data || []);

				onClose();
			} catch (error) {
				console.error('Erro ao criar o tweet:', error);
				alert('Ocorreu um erro ao criar o tweet.');
			} finally {
				setLoading(false);
			}
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
					maxLength={280} // Limite de caracteres
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
