import {
	iconeExplorar,
	iconeLogoGrowtweet,
	iconePaginaInicialSelecionado,
	iconePerfil,
} from '../../../assets/Imagens/light_color';
import { Button, Icone } from '../../../components/DefaultLayout';
import { StyledLink } from '../StyledLink';
import { ContainerLogosStyled } from './styled';

const icons = [
	{
		image: iconePaginaInicialSelecionado,
		label: 'Pagina inicial',
	},
	{
		image: iconeExplorar,
		label: 'Explorar',
	},
	{
		image: iconePerfil,
		label: 'Perfil',
	},
];

export const ContainerLogos = () => {
	return (
		<ContainerLogosStyled>
			<img
				src={iconeLogoGrowtweet}
				alt='Logo Growdtweet'
			/>
			<div>
				{icons.map((icon) => (
					<Icone key={icon.image}>
						<img
							src={icon.image}
							alt={icon.label}
						/>
						<StyledLink
							to=''
							$fontSize
							$color
							$hover>
							{icon.label}
						</StyledLink>
					</Icone>
				))}
			</div>
			<Button>Tweetar</Button>
		</ContainerLogosStyled>
	);
};
