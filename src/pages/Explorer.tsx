import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsStyled } from '../components/DefaultLayout/Styled';
import { ExplorerStyled } from '../components/Explorer/ExplorerStyled';
import { PageTitle } from '../components/Explorer/PageTitle';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getUser } from '../config/services/user.service';
import { TweetTypes } from '../config/types/tweet.types';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';

const breakingNews = [
	{
		title: 'Esportes - Há 45 min',
		description: 'Assunto sobre esportes',
	},
	{
		title: 'Assunto do Momento em Brasil',
		description: 'Assunto do Momento',
	},
	{
		title: 'Música - Assunto do Momento',
		description: 'Assunto sobre Música',
	},
	{
		title: 'Cinema - Assunto do Momento',
		description: 'Assunto sobre Filmes e Cinema',
	},
	{
		title: 'Entretenimento - Assunto do Momento',
		description: 'Assunto sobre Entretenimento',
	},
	{
		title: 'Assunto do Momento em Porto Alegre',
		description: 'Assunto do Momento em Porto Alegre',
	},
	{
		title: 'Daphne - Principal Assunto do Momento',
		description: 'Assunto sobre a Daphne',
	},
];

const fallbackUser: User = {
	id: '',
	name: '',
	username: '',
	email: '',
	password: '',
	createdAt: new Date(),
};

const fallbackTweet: TweetTypes = {
	id: '',
	content: '',
	type: 'Tweet',
	createdAt: new Date().toISOString(),
	userId: '',
};

export const Explorer = () => {
	const headers = getDataHeaders();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [_tweets, setTweets] = useState<TweetTypes[]>([]);
	const [currentTweet, _setCurrentTweet] = useState<TweetTypes | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	const handleTweetAdded = (newTweet: TweetTypes) => {
		setTweets((prevTweets) => {
			const updatedTweets = [newTweet, ...prevTweets];
			return updatedTweets;
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			if (!headers?.token) {
				navigate('/');
				return;
			}

			setLoading(true);
			const responseGetUser = await getUser(headers);
			setLoading(false);

			if (!responseGetUser.success) {
				alert(responseGetUser.message);
				navigate('/');
				return;
			}

			const loggedInUser = responseGetUser.data?.find(
				(user: User) => user.id === headers.userId
			);

			setUser(loggedInUser || null);
		};

		fetchData();
	}, []);

	return (
		<DefaultLayout
			isOpen={isOpen}
			onClose={handleModal}
			onTweetAdded={handleTweetAdded}
			tweet={currentTweet ?? fallbackTweet}
			user={user ?? fallbackUser}>
			<PageTitle>Explorar</PageTitle>
			<ExplorerStyled>
				{breakingNews.map((breakingNew) => (
					<NewsStyled
						$marginTop
						key={breakingNew.title}>
						<small>{breakingNew.title}</small>
						<p>{breakingNew.description}</p>
					</NewsStyled>
				))}
			</ExplorerStyled>
			{loading && <ModalLoading />}
		</DefaultLayout>
	);
};
