import { useState } from 'react';
import {
	iconeApagar,
	iconeAtualizar,
	iconePontinhos,
} from '../../assets/Imagens/light_color';
import { UpsertModal } from '../Modal/UpsertModal';
import { UpdateDeleteStyled } from './Styled/UpdateDeleteStyled';
import { TweetTypes } from '../../config/types/tweet.types';
import { DeleteModal } from '../Modal/DeleteModal';

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
	onTweetDeleted: (deletedTweetId: string) => void;
}

export const UpdateDelete = ({
	isOpen,
	onClose,
	onTweet,
	tweet,
	onTweetDeleted,
}: UpdateDeleteProps) => {
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [actionType, setActionType] = useState<'edit' | 'delete' | null>(null);

	const openEditModal = () => {
		setActionType('edit');
		setIsOpenModalUpdate(true);
	};

	const closeModalUpdate = () => {
		setIsOpenModalUpdate(false);
		setActionType(null);
	};

	const openDeleteModal = () => {
		setActionType('delete');
		setIsOpenModalDelete(true);
	};

	const closeDeleteModal = () => {
		setIsOpenModalDelete(false);
		setActionType(null);
	};

	const handleAction = (action: 'edit' | 'delete') => {
		if (action === 'edit') {
			openEditModal();
		} else if (action === 'delete') {
			openDeleteModal();
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
			{actionType === 'edit' && tweet && (
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
			{actionType === 'delete' && tweet && (
				<DeleteModal
					isOpen={isOpenModalDelete}
					onClose={closeDeleteModal}
					tweetId={tweet.id}
					onTweetDeleted={onTweetDeleted}
				/>
			)}
		</UpdateDeleteStyled>
	);
};
