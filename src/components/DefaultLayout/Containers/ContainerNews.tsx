import { NewsStyled } from '../Styled';
import { StyledLinkStyled } from '../Styled/StyledLinkStyled';
import { ContainerNewsStyled } from './styled';

interface ContainerNewsProps {
	$isActive: boolean;
}

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

export const ContainerNews = ({ $isActive }: ContainerNewsProps) => {
	return (
		<ContainerNewsStyled $isActive={$isActive}>
			<div>
				<h5>O que está acontecendo?</h5>

				{breakingNews.map((breakingNew) => (
					<NewsStyled key={breakingNew.title}>
						<small>{breakingNew.title}</small>
						<p>{breakingNew.description}</p>
					</NewsStyled>
				))}

				<StyledLinkStyled to=''>mostrar mais</StyledLinkStyled>
			</div>
		</ContainerNewsStyled>
	);
};
