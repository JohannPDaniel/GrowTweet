import { useState } from 'react';
import {
	ContainerContentStyled,
	ContainerStyled,
} from '../../components/DefaultLayout/Containers/styled';
import { SideNav } from '../../components/SideNav';
import {
	ContainerNav,
	ContainerNews,
} from '../../components/DefaultLayout/Containers';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showNews, setShowNews] = useState(false);

	const toggleMenu = (e: React.MouseEvent) => {
		e.stopPropagation();

		setShowMenu((prev) => !prev);
		setShowNews(false);
	};

	const toggleNews = (e: React.MouseEvent) => {
		e.stopPropagation();
		setShowNews((prev) => !prev);
		setShowMenu(false);
	};

	const handleCloseMenus = () => {
		setShowMenu(false);
		setShowNews(false);
	};
	return (
		<ContainerStyled onClick={handleCloseMenus}>
			<ContainerNav $isActive={showMenu} />

			<ContainerContentStyled>{children}</ContainerContentStyled>

			<ContainerNews $isActive={showNews} />

			<SideNav
				toggleMenu={toggleMenu}
				toggleNews={toggleNews}
			/>
		</ContainerStyled>
	);
};
