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
import { LogoutModal } from '../../Modal/LogoutModal';
import { TweetTypes } from '../../../config/types/tweet.types';

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

interface EqualWidthNavigationProps {
	tweet?: TweetTypes;
	onTweetCreated?: ( tweet: TweetTypes ) => void
	isOpen: boolean;
	onClose: () => void
}

const fallbackTweet: TweetTypes = {
	id: '',
	content: '',
	type: '',
	createdAt: new Date().toLocaleDateString(),
	userId: '',
};


export const EqualWidthNavigation = ({tweet, onTweetCreated, isOpen, onClose}: EqualWidthNavigationProps) => {
	const [isTweetModalOpen, _setIsTweetModalOpen] = useState(false);
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

	const { pathname } = useLocation();
	const activeIndex = useMemo(() => {
		return navigations.findIndex((nav) => nav.to === pathname);
	}, [pathname]);


	const handleLogoutClick = () => {
		setIsLogoutModalOpen(true);
	};

	return (
		<>
			<EqualWidthNavigationStyled
				$backgroundColor={isTweetModalOpen}
				$filter={isTweetModalOpen}>
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
							onClick={nav.alt === 'Sair' ? handleLogoutClick : undefined}
						/>
					</Link>
				))}

				<button onClick={onClose}>
					<img
						src={iconeResponder}
						alt='icone de responder'
					/>
				</button>
			</EqualWidthNavigationStyled>

			<UpsertModal
				tweet={tweet || fallbackTweet}
				isOpen={isOpen}
				onClose={onClose}
				onTweetCreated={(tweet) => {
					if (onTweetCreated) {
						onTweetCreated(tweet);
					}
				}}
			/>
			<LogoutModal
				isOpen={isLogoutModalOpen}
				onClose={() => setIsLogoutModalOpen(false)}
			/>
		</>
	);
};
