import { Link } from 'react-router-dom';
import {
	iconeExplorar,
	iconeLogoGrowtweet,
	iconePaginaInicialSelecionado,
	iconePerfil,
} from '../../assets/Imagens/light_color';
import {
	ContainerContent,
	ContainerNavStyled,
	ContainerNewsStyled,
	ContainerStyled,
} from './Containers/styled';
import { Icone } from '../../components/Explorer/Icone';
import { Button } from '../../components/Explorer/Button';
import { ContainerLogos } from "./Containers/styled/ContainerLogos";
import { ContainerLogout } from "./Containers/styled/ContainerLogout";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

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

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<ContainerStyled>
			<ContainerNavStyled>
				<ContainerLogos>
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
								<Link to=''>{icon.label}</Link>
							</Icone>
						))}
					</div>
					<Button>Tweetar</Button>
				</ContainerLogos>
				<ContainerLogout>
					<p>Sair</p>
				</ContainerLogout>
			</ContainerNavStyled>
			<ContainerContent>{children}</ContainerContent>
			<ContainerNewsStyled></ContainerNewsStyled>
		</ContainerStyled>
	);
};
