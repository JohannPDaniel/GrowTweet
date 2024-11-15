import { useState } from 'react';
import {
	iconeExplorar,
	iconeLogoGrowtweet,
	iconePaginaInicial,
	iconePerfil,
} from '../../../assets/Imagens/light_color';
import { Button, Icone } from '../../../components/DefaultLayout';
import { UpsertModal } from '../../Modal/UpsertModal';
import { StyledLink } from '../StyledLink';
import { ContainerLogosStyled } from './styled';

const icons = [
	{
		image: iconePaginaInicial,
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
	const [openModal, setOpenModal] = useState<boolean>(false);

	function handleModal() {
		setOpenModal(!openModal);
	}
	return (
		<ContainerLogosStyled>
			<img
				src={iconeLogoGrowtweet}
				alt='Logo Growdtweet'
			/>

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

			<Button
				$height
				$marginTop
				$maxWidth
				$fontSize
				onClick={handleModal}>
				Tweetar
			</Button>
			<UpsertModal
				isOpen={openModal}
				onClose={handleModal}
			/>
		</ContainerLogosStyled>
	);
};
