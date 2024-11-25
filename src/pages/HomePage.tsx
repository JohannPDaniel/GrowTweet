import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getUser } from '../config/services/user.service';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { TweetTypes } from '../config/types/tweet.types';
import { GetTweet } from '../config/services/tweet.service';

export const HomePage = () => {
	const [user, setUser] = useState<User | null>(null);
	const [tweet, setTweet] = useState<TweetTypes | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const headers = getDataHeaders();

	useEffect(() => {
		const fetchUser = async () => {
			if (!headers?.token) {
				navigate('/');
				return;
			}

			setLoading(true);
			const responseUser = await getUser(headers.userId, headers);
			const responseTweet = await GetTweet(headers.userId, headers);
			setLoading(false);

			if (!responseUser.success || !responseTweet.success) {
				alert(responseUser.message);
				navigate('/');
				return;
			}

			setUser(responseUser.data || null);
			setTweet(responseTweet.data || null);

			if (!tweet) {
				return;
			}
		};

		fetchUser();
	}, [navigate]);

	return (
		<>
			<DefaultLayout>
				<PageTitle>Página Inicial</PageTitle>
				{user && tweet && (
					<Tweet
						tweet={tweet}
						user={user}
						loading={loading}
					/>
				)}
			</DefaultLayout>

			{loading && <ModalLoading />}
		</>
	);
};
