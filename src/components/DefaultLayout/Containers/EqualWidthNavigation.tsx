import { useMemo, useState } from 'react';
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
import { UpsertModal } from '../../Modal/UpsertModal';
import { EqualWidthNavigationStyled } from './styled/EqualWidthNavigationStyled';

const navigations = [
	{
		icone: iconePaginaInicial,
		alt: 'Página Inicial',
		to: '/homepage',
		activeImage: iconePaginaInicialSelecionado,
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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isTweet, setIsTweet] = useState(false);

	const { pathname } = useLocation();
	const activeIndex = useMemo(() => {
		return navigations.findIndex((nav) => nav.to === pathname);
	}, [pathname]);

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
		setIsTweet(!isTweet);
	};

	return (
		<>
			<EqualWidthNavigationStyled
				$backgroundColor={isTweet}
				$filter={isTweet}>
				{navigations.map((nav, index) => (
					<Link
						to={nav.to}
						key={index}
						className={activeIndex === index ? 'active' : ''}
						aria-current={activeIndex === index ? 'page' : undefined}
						aria-label={nav.alt} 
					>
						<img
							src={activeIndex === index ? nav.activeImage : nav.icone}
							alt={nav.alt}
						/>
					</Link>
				))}

				<button
					>
					<img
						src={iconeResponder}
						alt='icone de responder'
						onClick={handleModal}
					/>
				</button>
			</EqualWidthNavigationStyled>

			<UpsertModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};
