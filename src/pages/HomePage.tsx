import { useEffect } from 'react';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const dataHeaders = getDataHeaders();
	const navigate = useNavigate();

	useEffect(() => {
		if (!dataHeaders?.token) {
			navigate('/');
			return;
		}
	}, []);

	return (
		<DefaultLayout>
			<PageTitle>Página Inicial</PageTitle>
			<Tweet />
		</DefaultLayout>
	);
};
