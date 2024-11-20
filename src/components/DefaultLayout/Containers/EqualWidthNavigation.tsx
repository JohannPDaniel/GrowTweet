import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	iconeExplorar,
	iconeExplorarSelecionado,
	iconePaginaInicial,
	iconePaginaInicialSelecionado,
	iconePerfil,
	iconePerfilSelecionado,
	iconeResponder,
} from '../../../assets/Imagens/light_color';
import { EqualWidthNavigationStyled } from './styled/EqualWidthNavigationStyled';
import { UpsertModal } from '../../Modal/UpsertModal';

const navigations = [
	{
		icone: iconePaginaInicial,
		alt: 'Página Inicial',
		to: '/',
		activeImage: iconePaginaInicialSelecionado,
	},
	{
		icone: iconeResponder,
		alt: 'Tweetar',
		to: '',
		activeImage: iconeResponder,
	},
	{
		icone: iconeExplorar,
		alt: 'Explorar',
		to: '/explorer',
		activeImage: iconeExplorarSelecionado,
	},
	{
		icone: iconePerfil,
		alt: 'Perfil',
		to: '/profilepage',
		activeImage: iconePerfilSelecionado,
	},
];

export const EqualWidthNavigation = () => {
	const { pathname } = useLocation();

	const [isModalOpen, setModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(() =>
		navigations.findIndex((nav) => nav.to === pathname)
	);

	const handleButtonClick = (
		index: number,
		nav: (typeof navigations)[number]
	) => {
		setActiveIndex(index);
		if (nav.alt === 'Tweetar') {
			setModalOpen(true);
		}
	};

	useEffect(() => {
		const currentIndex = navigations.findIndex((nav) => nav.to === pathname);
		if (currentIndex !== -1) {
			setActiveIndex(currentIndex);
		}
	}, [pathname]);

	return (
		<>
			<EqualWidthNavigationStyled>
				{navigations.map((nav, index) => (
					<Link
						to={nav.to}
						key={index}
						onClick={(e) => {
							if (nav.alt === 'Tweetar') {
								e.preventDefault();
							}
							handleButtonClick(index, nav);
						}}
						className={activeIndex === index ? 'active' : ''}>
						<img
							src={activeIndex === index ? nav.activeImage : nav.icone}
							alt={nav.alt}
						/>
					</Link>
				))}
			</EqualWidthNavigationStyled>

			<UpsertModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</>
	);
};
