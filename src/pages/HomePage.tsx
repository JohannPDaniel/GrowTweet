import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getTweet } from '../config/services/tweet.service';
import { getUser } from '../config/services/user.service';
import { TweetTypes } from '../config/types/tweet.types';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';

export const HomePage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [tweets, setTweets] = useState<TweetTypes[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const headers = getDataHeaders();

	const fallbackUser: User = {
		id: '',
		name: 'Usuário desconhecido',
		username: 'desconhecido',
		email: 'desconhecido@example.com',
		password: '',
		createdAt: new Date(),
	};

	useEffect(() => {
		const fetchData = async () => {
			if (!headers?.token) {
				navigate('/');
				return;
			}

			setLoading(true);
			const responseGetUser = await getUser(headers);
			const responseGetTweet = await getTweet(headers);
			setLoading(false);

			if (!responseGetUser.success || !responseGetTweet.success) {
				alert(responseGetUser.message || responseGetTweet.message);
				navigate('/');
				return;
			}

			setUsers(responseGetUser.data || []);
			setTweets(responseGetTweet.data || []);
		};

		fetchData();
	}, [] );
	
	return (
		<>
			<DefaultLayout>
				<PageTitle>Página Inicial</PageTitle>
				{tweets.length > 0 ? (
					tweets.map((tweet) => {
						const tweetUser = users.find((user) => user.id === tweet.userId);
						return (
							<Tweet
								key={tweet.id}
								tweet={tweet}
								user={tweetUser || fallbackUser}
								loading={loading}
							/>
						);
					})
				) : (
					<p>Nenhum tweet disponível</p>
				)}
			</DefaultLayout>
			{loading && <ModalLoading />}
		</>
	);
};
