import { useCallback, useEffect, useState } from 'react';
import { iconeX } from '../../assets/Imagens/light_color';
import { createTweet, putTweet } from '../../config/services/tweet.service';
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
	tweet: TweetTypes;
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
	const [updatedTweet, setUpdatedTweet] = useState<TweetTypes>({
		...fallback,
		type,
	});
	const headers = getDataHeaders();

	useEffect(() => {
		if (tweet) {
			setUpdatedTweet(tweet);
		} else {
			setUpdatedTweet({ ...fallback, type });
		}
	}, [tweet, type]);

	const submitForm = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const body: TweetContent = {
				content: updatedTweet.content.trim(),
				type,
			};

			setLoading(true);

			let response;
			if (updatedTweet?.id) {
				response = await putTweet(updatedTweet.id, body.content, headers);
			} else {
				response = await createTweet(body, headers);
			}

			setLoading(false);

			if (!response.success) {
				alert(response.message);
			} else {
				onTweetCreated(response.data);
			}

			handleClose();
		},
		[type, headers, onTweetCreated, updatedTweet]
	);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedTweet({
			...updatedTweet,
			content: e.target.value,
		});
	};

	const handleClose = () => {
		setUpdatedTweet({ ...fallback, type });
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}>
			<form onSubmit={submitForm}>
				<CloseModalStyled>
					<img
						src={iconeX}
						alt='Icone de Fechar'
						onClick={handleClose}
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
