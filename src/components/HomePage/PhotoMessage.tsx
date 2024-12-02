import { useEffect, useState } from 'react';
import { iconeLogoGrowdev } from '../../assets/Imagens/light_color';
import { User } from '../../config/types/User';
import { PhotoProfileStyled } from '../DefaultLayout/Styled';
import { MessageTitleStyled } from './Styled/MessageTitleStyled';
import { MessageStyled, PhotoMessageStyled } from './Styled/PhotoMessageStyled';
import { UpdateDelete } from './UpdateDelete';
import { TweetTypes } from '../../config/types/tweet.types';

interface PhotoMessageProps {
	user: User;
	tweet: TweetTypes;
	loading: boolean;
	onTweetUpdated: (updatedTweet: TweetTypes) => void;
	onTweetDeleted: (deletedTweetId: string) => void; 
}

export const PhotoMessage = ({
	user,
	tweet,
	onTweetUpdated,
	onTweetDeleted,
}: PhotoMessageProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<Date>(new Date());

	const toggleDropdown = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen((prev) => !prev);
	};

	const closeDropdown = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 10);

		return () => clearInterval(timer);
	}, []);

	const timeDifferenceInHours = Math.floor(
		(currentTime.getTime() - new Date(tweet.createdAt).getTime()) / 3600000
	);

	return (
		<PhotoMessageStyled onClick={closeDropdown}>
			<PhotoProfileStyled
				src={iconeLogoGrowdev}
				alt='imagem da pessoa'
			/>
			<MessageStyled>
				<MessageTitleStyled>
					<div>
						<strong>{user.name}</strong>
						<p>
							@{user.username}
							<span>
								&bull;&nbsp;
								{timeDifferenceInHours}h
							</span>
						</p>
					</div>
					<UpdateDelete
						tweet={tweet?.id ? tweet : undefined}
						isOpen={isOpen}
						onClose={toggleDropdown}
						onTweet={onTweetUpdated}
						onTweetDeleted={onTweetDeleted}
					/>
				</MessageTitleStyled>
				<p>{tweet.content}</p>
			</MessageStyled>
		</PhotoMessageStyled>
	);
};
