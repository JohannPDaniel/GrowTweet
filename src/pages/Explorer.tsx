import { NewsStyled } from "../components/DefaultLayout/Styled";
import { ExplorerStyled } from '../components/Explorer/ExplorerStyled';
import { PageTitle } from '../components/Explorer/PageTitle';
import { DefaultLayout } from '../config/Layout/DefaultLayout';

const breakingNews = [
	{
		title: 'Esportes - Há 45 min',
		description: 'Assunto sobre esportes',
	},
	{
		title: 'Assunto do Momento em Brasil',
		description: 'Assunto do Momento',
	},
	{
		title: 'Música - Assunto do Momento',
		description: 'Assunto sobre Música',
	},
	{
		title: 'Cinema - Assunto do Momento',
		description: 'Assunto sobre Filmes e Cinema',
	},
	{
		title: 'Entretenimento - Assunto do Momento',
		description: 'Assunto sobre Entretenimento',
	},
	{
		title: 'Assunto do Momento em Porto Alegre',
		description: 'Assunto do Momento em Porto Alegre',
	},
	{
		title: 'Daphne - Principal Assunto do Momento',
		description: 'Assunto sobre a Daphne',
	},
];

export const Explorer = () => {
	return (
		<DefaultLayout>
			<PageTitle>Explorar</PageTitle>
			<ExplorerStyled>
				{breakingNews.map((breakingNew) => (
					<NewsStyled $marginTop key={breakingNew.title}>
						<small>{breakingNew.title}</small>
						<p>{breakingNew.description}</p>
					</NewsStyled>
				))}
			</ExplorerStyled>
		</DefaultLayout>
	);
};
