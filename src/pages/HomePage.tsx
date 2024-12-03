import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/Explorer/PageTitle';
import { NoTweets } from '../components/HomePage/NoTweets';
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
	const [user, setUser] = useState<User | null>(null);
	const [tweets, setTweets] = useState<TweetTypes[]>([]);
	const [currentTweet, _setCurrentTweet] = useState<TweetTypes | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const headers = getDataHeaders();

	const fallbackTweet: TweetTypes = {
		id: '',
		content: '',
		type: 'Tweet',
		createdAt: new Date().toISOString(),
		userId: '',
	};

	const fallbackUser: User = {
		id: '',
		name: '',
		username: '',
		email: '',
		password: '',
		createdAt: new Date(),
	};

	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	const handleTweetAdded = (newTweet: TweetTypes) => {
		setTweets((prevTweets) => {
			const updatedTweets = [newTweet, ...prevTweets];
			return updatedTweets;
		});
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

			const loggedInUser = responseGetUser.data?.find(
				(user: User) => user.id === headers.userId
			);

			const tweets = responseGetTweet.data || [];
			const sortedTweets = tweets.sort(
				(a: TweetTypes, b: TweetTypes) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			);
			setUser(loggedInUser || null);
			setUsers(responseGetUser.data || []);
			setTweets(sortedTweets);
		};

		console.log(user);

		fetchData();
	}, []);

	return (
		<>
			<DefaultLayout
				isOpen={isOpen}
				onClose={handleModal}
				user={user ?? fallbackUser}
				tweet={currentTweet || fallbackTweet}
				onTweetAdded={handleTweetAdded}>
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
								onTweetUpdated={handleTweetUpdated}
								onTweetDeleted={handleTweetDeleted}
							/>
						);
					})
				) : (
					<NoTweets />
				)}
			</DefaultLayout>
			{loading && <ModalLoading />}
		</>
	);
};
