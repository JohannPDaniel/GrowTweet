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
	iconeSair,
} from '../../../assets/Imagens/light_color';
import { UpsertModal } from '../../Modal/UpsertModal';
import { EqualWidthNavigationStyled } from './styled/EqualWidthNavigationStyled';
import { LogoutModal } from "../../Modal/LogoutModal";

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
	{
		icone: iconeSair,
		alt: 'Sair',
		to: '',
		activeImage: iconeSair,
	},
];

export const EqualWidthNavigation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
	const [isTweet, setIsTweet] = useState(false);

	const { pathname } = useLocation();
	const activeIndex = useMemo(() => {
		return navigations.findIndex((nav) => nav.to === pathname);
	}, [pathname]);

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
		setIsTweet(!isTweet);
	};

	const closeModal = (navAlt: string) => {
		if (navAlt === 'Sair') {
			setIsCloseModalOpen(true); // Abre o modal de logout
		} else {
			setIsTweet(!isTweet); // Função original para outro modal
		}
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
						aria-label={nav.alt}>
						<img
							src={activeIndex === index ? nav.activeImage : nav.icone}
							alt={nav.alt}
							onClick={() => closeModal(nav.alt)}
						/>
					</Link>
				))}

				<button>
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

			<LogoutModal
				isOpen={isCloseModalOpen}
				onClose={() => setIsCloseModalOpen(false)}
			/>
		</>
	);
};
