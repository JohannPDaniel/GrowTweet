import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from "../components/HomePage/Tweet";
import { DefaultLayout } from '../config/Layout/DefaultLayout';

export const HomePage = () => {
	return (
		<DefaultLayout>
			<PageTitle>Página Inicial</PageTitle>
			<Tweet />
		</DefaultLayout>
	);
};
