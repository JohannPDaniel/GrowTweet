import { useCallback, useState } from 'react';
import { iconeX } from '../../assets/Imagens/light_color';
import { createTweet } from '../../config/services/tweet.service';
import { TweetContent, TweetTypes } from '../../config/types/tweet.types';
import { getDataHeaders } from '../../config/utils/getDataHeaders';
import { ButtonStyled } from '../DefaultLayout/Styled';
import { Modal } from './Modal';
import { ButtonSectionStyled, CloseModalStyled } from './ModalStyled';
import { BoxStyled } from './ModalStyled/BoxStyled';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onTweetCreated: (tweet: TweetTypes) => void;
	type?: 'Tweet' | 'Reply';
	tweet?: TweetTypes;
}

export const UpsertModal = ({
	isOpen,
	onClose,
	onTweetCreated,
	tweet,
	type = 'Tweet',
}: UpsertModalProps) => {
	const fallback = {
		id: '',
		content: '',
		type: 'Tweet',
		createdAt: new Date().toISOString(),
		userId: '',
	};
	const [loading, setLoading] = useState(false);
	const [updatedTweet, setUpdatedTweet] = useState<TweetTypes>(
		tweet || fallback
	);
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

			if (response.success && response.data && onTweetCreated) {
				onTweetCreated(response.data);
			}

			onClose();
		},
		[type, headers, onTweetCreated, onClose]
	);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedTweet({
			...updatedTweet,
			content: e.target.value,
		});
	};

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
					value={updatedTweet.content || ''}
					onChange={handleChange}
				/>
				<ButtonSectionStyled
					$alignItems='baseline'
					$justifyContent='flex-end'>
					<ButtonStyled
						type='submit'
						disabled={loading}>
						{loading ? 'Enviando...' : 'Tweetar'}
					</ButtonStyled>
				</ButtonSectionStyled>
			</form>
		</Modal>
	);
};
