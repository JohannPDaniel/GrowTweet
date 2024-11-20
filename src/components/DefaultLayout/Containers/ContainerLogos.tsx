import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	iconeExplorar,
	iconeExplorarSelecionado,
	iconeLogoGrowtweet,
	iconePaginaInicial,
	iconePaginaInicialSelecionado,
	iconePerfil,
	iconePerfilSelecionado,
} from '../../../assets/Imagens/light_color';
import { UpsertModal } from '../../Modal/UpsertModal';
import { ContainerLogosStyled } from './styled';
import { ButtonStyled, IconeStyled } from '../Styled';
import { StyledLinkStyled } from '../Styled/StyledLinkStyled';

const icons = [
	{
		image: iconePaginaInicial,
		label: 'Pagina inicial',
		to: '/',
		activeImage: iconePaginaInicialSelecionado.replace('normal', 'active'),
	},
	{
		image: iconeExplorar,
		label: 'Explorar',
		to: '/explorer',
		activeImage: iconeExplorarSelecionado.replace('normal', 'active'),
	},
	{
		image: iconePerfil,
		label: 'Perfil',
		to: '/profilepage',
		activeImage: iconePerfilSelecionado.replace('normal', 'active'),
	},
];

export const ContainerLogos = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [openModal, setOpenModal] = useState<boolean>(false);
	const [activeIcon, setActiveIcon] = useState<string | null>(null);

	useEffect(() => {
		const currentIcon = icons.find((icon) => icon.to === pathname);
		if (currentIcon) {
			setActiveIcon(currentIcon.label);
		}
	}, [pathname]);

	function handleModal() {
		setOpenModal(!openModal);
	}

	function handleLinkClick(iconLabel: string, path: string) {
		setActiveIcon(iconLabel);
		navigate(path);
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
						src={activeIcon === icon.label ? icon.activeImage : icon.image}
						alt={icon.label}
					/>
					<StyledLinkStyled
						to={icon.to}
						$fontSize
						$color
						$hover
						onClick={() => handleLinkClick(icon.label, icon.to)}>
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
