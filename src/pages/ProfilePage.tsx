import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getUser } from '../config/services/user.service';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { TweetTypes } from '../config/types/tweet.types';
import { getTweet } from '../config/services/tweet.service';

export const ProfilePage = () => {
	const headers = getDataHeaders();
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null); // Armazena o usuário logado
	const [tweets, setTweets] = useState<TweetTypes[]>([]); // Armazena os tweets do usuário
	const [ loading, setLoading ] = useState<boolean>( true );
	
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

			setLoading( true );
			
				setLoading(true)
				const responseUser = await getUser(headers);
				const responseTweet = await getTweet(headers);
				setLoading(false)

				if (!responseUser.success || !responseTweet.success) {
					alert(responseUser.message || responseTweet.message);
					navigate('/');
					return;
				}

				const loggedInUser = responseUser.data?.find(
					(u: User) => u.id === headers.userId
				);
				setUser(loggedInUser || null);

				const userTweets = responseTweet.data?.filter(
					(tweet: TweetTypes) => tweet.userId === headers.userId
				);
				setTweets(userTweets || []);
		};

		fetchData();
	}, []);

	return (
		<>
			<DefaultLayout>
				<PageTitle>
					<TitleContent />
					<ProfileLogout
						$flexDirection
						$fontSize
						$border
						$maxWidth
					/>
				</PageTitle>
				{loading ? (
					<ModalLoading />
				) : tweets.length > 0 ? (
					tweets.map((tweet) => (
						<Tweet
							key={tweet.id}
							tweet={tweet}
							user={user || fallbackUser} // Passa o usuário logado para cada tweet
							loading={loading}
						/>
					))
				) : (
					<p>Nenhum tweet disponível</p>
				)}
			</DefaultLayout>
		</>
	);
};
