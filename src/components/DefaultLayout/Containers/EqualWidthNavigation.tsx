import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	iconeExplorar,
	iconePaginaInicial,
	iconePerfil,
	iconeResponder,
} from '../../../assets/Imagens/light_color';
import { EqualWidthNavigationStyled } from './styled/EqualWidthNavigationStyled';
import { UpsertModal } from '../../Modal/UpsertModal';

const navigations = [
	{
		icone: iconePaginaInicial,
		alt: 'Página Inicial',
		to: '/',
	},
	{
		icone: iconeResponder,
		alt: 'Tweetar',
		to: '', 
	},
	{
		icone: iconeExplorar,
		alt: 'Explorar',
		to: '/explorer',
	},
	{
		icone: iconePerfil,
		alt: 'Perfil',
		to: '/profilepage',
	},
];

export const EqualWidthNavigation = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const [activeIndex, setActiveIndex] = useState(() => {
		const defaultActive = navigations.findIndex(
			(nav) => nav.to === window.location.pathname
		);
		return defaultActive !== -1 ? defaultActive : 0;
	});

	const handleButtonClick = (
		index: number,
		nav: (typeof navigations)[number]
	) => {
		setActiveIndex(index);

		if (nav.alt === 'Tweetar') {
			setModalOpen(true);
		}
	};

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
							src={nav.icone}
							alt={nav.alt}
						/>
					</Link>
				))}
			</EqualWidthNavigationStyled>

			{/* Modal */}
			<UpsertModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</>
	);
};
