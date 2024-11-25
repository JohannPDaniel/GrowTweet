import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { ModalLoading } from '../components/Modal/ModalLoading';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getUser } from '../config/services/user.service';
import { User } from '../config/types/User';
import { getDataHeaders } from '../config/utils/getDataHeaders';

export const HomePage = () => {
	const [user, setUser] = useState<User | null>(null);
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
			const response = await getUser(headers.userId, headers);
			setLoading(false);

			if (!response.success) {
				alert(response.message);
				navigate('/');
				return;
			}

			setUser(response.data || null);
		};

		fetchUser();
	}, [navigate]);

	return (
		<>
			<DefaultLayout>
				<PageTitle>Página Inicial</PageTitle>
				{user && (
					<Tweet
						user={user}
						loading={loading}
					/>
				)}
			</DefaultLayout>

			{loading && <ModalLoading />}
		</>
	);
};
