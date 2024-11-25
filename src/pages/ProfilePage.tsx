import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { getUser } from '../config/services/user.service';
import { User } from '../config/types/User';
import { Loading } from './Loading';
import { ModalLoading } from "../components/Modal/ModalLoading";

export const ProfilePage = () => {
	const dataHeaders = getDataHeaders();
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!dataHeaders?.token) {
			navigate('/');
			return;
		}
	}, []);

	useEffect(() => {
		const fetchUser = async () => {
			if (!dataHeaders) {
				return;
			}

			setLoading(true);
			const response = await getUser(dataHeaders.userId, dataHeaders);
			setLoading(false);

			if (!response.success) {
				alert(response.message);
				navigate('/');
				return;
			}

			setUser(response.data || null);
		};

		fetchUser();
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
				{user && (
					<Tweet
						loading={loading}
						user={user}
					/>
				)}
			</DefaultLayout>
			{loading && <ModalLoading />}
		</>
	);
};
