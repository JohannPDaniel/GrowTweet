import { Link } from 'react-router-dom';
import { SideNavStyled } from './SideNavStyled';

interface SideNavProps {
	toggleMenu: (e: React.MouseEvent) => void;
	toggleNews: (e: React.MouseEvent) => void;
}

export const SideNav = ({ toggleMenu, toggleNews }: SideNavProps) => {
	return (
		<SideNavStyled>
			<Link
				className='nav'
				to='#'
				onClick={toggleMenu}>
				Menu
			</Link>
			<Link
				className='news'
				to='#'
				onClick={toggleNews}>
				News
			</Link>
		</SideNavStyled>
	);
};
