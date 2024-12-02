import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getTweet } from '../config/services/tweet.service';
import { getUser } from '../config/services/user.service';
import { TweetTypes } from '../config/types/tweet.types';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import NoTweets from '../components/HomePage/NoTweets';

export const ProfilePage = () => {
	const headers = getDataHeaders();
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [tweets, setTweets] = useState<TweetTypes[]>([]);
	const [validateTweet, _setValidateTweet] = useState<TweetTypes | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const fallbackTweet: TweetTypes = {
		id: '',
		content: '',
		type: 'Tweet',
		createdAt: new Date().toISOString(),
		userId: '',
	};

	const fallbackUser: User = {
		id: '',
		name: 'Usuário desconhecido',
		username: 'desconhecido',
		email: 'desconhecido@example.com',
		password: '',
		createdAt: new Date(),
	};

	const handleTweetUpdated = (updatedTweet: TweetTypes) => {
		setTweets((prevTweets) =>
			prevTweets.map((tweet) =>
				tweet.id === updatedTweet.id ? updatedTweet : tweet
			)
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (!headers?.token) {
				navigate('/');
				return;
			}

			setLoading(true);

			const responseUser = await getUser(headers);
			const responseTweet = await getTweet(headers);
			setLoading(false);

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
		<DefaultLayout tweet={validateTweet || fallbackTweet}>
			<PageTitle>
				<TitleContent />
				<ProfileLogout
					$flexDirection
					$fontSize
					$border
					$maxWidth
					$maxHeight
				/>
			</PageTitle>
			{loading ? (
				<ModalLoading />
			) : tweets.length > 0 ? (
				tweets.map((tweet) => (
					<Tweet
						key={tweet.id}
						tweet={tweet}
						user={user || fallbackUser}
						loading={loading}
						onTweetUpdated={handleTweetUpdated}
					/>
				))
			) : (
				<NoTweets $minHeight />
			)}
		</DefaultLayout>
	);
};
