import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getTweet } from '../config/services/tweet.service';
import { getUser } from '../config/services/user.service';
import { TweetTypes } from '../config/types/tweet.types';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { NoTweets } from "../components/HomePage/NoTweets";
import { ModalLoading } from "../components/Modal/ModalLoading";

export const ProfilePage = () => {
	const headers = getDataHeaders();
	const navigate = useNavigate();
	const [users, setUsers] = useState<User[]>([]);
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

	const handleTweetCreated = (newTweet: TweetTypes) => {
		setTweets((prevTweets) => [newTweet, ...prevTweets]); // Adiciona o novo tweet no início da lista
	};


	const handleTweetUpdated = (updatedTweet: TweetTypes) => {
		setTweets((prevTweets) =>
			prevTweets.map((tweet) =>
				tweet.id === updatedTweet.id ? updatedTweet : tweet
			)
		);
	};

	const handleTweetDeleted = (deletedTweetId: string) => {
		setTweets((prevTweets) => {
			const updatedTweets = [...prevTweets];
			const index = updatedTweets.findIndex(
				(tweet) => tweet.id === deletedTweetId
			);
			if (index !== -1) {
				updatedTweets.splice(index, 1);
			}
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
	}, []);

	return (
		<DefaultLayout
			tweet={validateTweet || fallbackTweet}
			onTweetAdded={handleTweetCreated}>
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
			{tweets.length > 0 ? (
				tweets.map((tweet) => {
					const tweetUser = users.find((user) => user.id === tweet.userId);
					return (
						<Tweet
							key={tweet.id}
							tweet={tweet}
							user={tweetUser || fallbackUser}
							loading={loading}
							onTweetUpdated={handleTweetUpdated}
							onTweetDeleted={handleTweetDeleted}
						/>
					);
				})
			) : (
				<NoTweets $minHeight />
			)}
			{loading && <ModalLoading />}
		</DefaultLayout>
	);
};
