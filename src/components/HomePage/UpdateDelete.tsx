import { useState } from 'react';
import {
	iconeApagar,
	iconeAtualizar,
	iconePontinhos,
} from '../../assets/Imagens/light_color';
import { UpsertModal } from '../Modal/UpsertModal';
import { UpdateDeleteStyled } from './Styled/UpdateDeleteStyled';
import { TweetTypes } from '../../config/types/tweet.types';

const upletes = [
	{
		image: iconeAtualizar,
		alt: 'Atualizar',
		name: 'Editar',
		action: 'edit',
	},
	{
		image: iconeApagar,
		alt: 'Apagar',
		name: 'Deletar',
		action: 'delete',
	},
];

interface UpdateDeleteProps {
	isOpen?: boolean;
	onClose?: (e: React.MouseEvent) => void;
	onTweet?: (tweet: TweetTypes) => void;
	tweet?: TweetTypes;
}

export const UpdateDelete = ({
	isOpen,
	onClose,
	onTweet,
	tweet,
}: UpdateDeleteProps) => {
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
	const [actionType, setActionType] = useState<'edit' | 'delete' | null>(null);

	const openEditModal = () => {
		setActionType('edit'); // Define a ação como "editar"
		setIsOpenModalUpdate(true);
	};

	const closeModalUpdate = () => {
		setIsOpenModalUpdate(false);
		setActionType(null);
	};

	const handleAction = (action: 'edit' | 'delete') => {
		if (action === 'edit') {
			openEditModal();
		} else if (action === 'delete') {
			setActionType('delete');
			if (onTweet && tweet) {
				onTweet(tweet);
			}
		}
	};

	return (
		<UpdateDeleteStyled $display={isOpen}>
			<img
				src={iconePontinhos}
				alt='Editar ou deletar'
				onClick={onClose}
			/>
			<div className='dropdown-content'>
				{upletes.map((uplete, index) => (
					<div
						key={index}
						className='dropdown-editar'
						onClick={() => handleAction(uplete.action as 'edit' | 'delete')}>
						<img
							src={uplete.image}
							alt={uplete.alt}
						/>
						<p>{uplete.name}</p>
					</div>
				))}
			</div>

			{actionType === 'edit' && (
				<UpsertModal
					isOpen={isOpenModalUpdate}
					onClose={closeModalUpdate}
					tweet={tweet}
					onTweetCreated={(updatedTweet) => {
						if (onTweet) {
							onTweet(updatedTweet);
						}
						closeModalUpdate();
					}}
				/>
			)}
		</UpdateDeleteStyled>
	);
};
