import { useState } from 'react';
import {
	iconeExplorar,
	iconeLogoGrowtweet,
	iconePaginaInicial,
	iconePerfil,
} from '../../../assets/Imagens/light_color';
import { UpsertModal } from '../../Modal/UpsertModal';
import { ContainerLogosStyled } from './styled';
import { ButtonStyled, IconeStyled } from "../Styled";
import { StyledLinkStyled } from "../Styled/StyledLinkStyled";


const icons = [
	{
		image: iconePaginaInicial,
		label: 'Pagina inicial',
		to: '/',
	},
	{
		image: iconeExplorar,
		label: 'Explorar',
		to: '/explorer',
	},
	{
		image: iconePerfil,
		label: 'Perfil',
		to: '/profilepage',
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

			{icons.map((icon, index) => (
				<IconeStyled key={index}>
					<img
						src={icon.image}
						alt={icon.label}
					/>
					<StyledLinkStyled
						to={icon.to}
						$fontSize
						$color
						$hover>
						{icon.label}
					</StyledLinkStyled>
				</IconeStyled>
			))}

			<ButtonStyled
				$height
				$marginTop
				$maxWidth
				$fontSize
				onClick={handleModal}>
				Tweetar
			</ButtonStyled>
			<UpsertModal
				isOpen={openModal}
				onClose={handleModal}
			/>
		</ContainerLogosStyled>
	);
};
