import { News, StyledLink } from '../../../components/DefaultLayout';
import { ContainerNewsStyled } from './styled';

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
];

export const ContainerNews = () => {
	return (
		<ContainerNewsStyled>
			<div>
				<h5>O que está acontecendo?</h5>

				{breakingNews.map((breakingNew) => (
					<News key={breakingNew.title}>
						<small>{breakingNew.title}</small>
						<p>{breakingNew.description}</p>
					</News>
				))}

				<StyledLink to=''>mostrar mais</StyledLink>
			</div>
		</ContainerNewsStyled>
	);
};
