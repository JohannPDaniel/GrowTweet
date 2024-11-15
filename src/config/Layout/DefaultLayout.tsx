import {
	ContainerNav,
	ContainerNews,
} from '../../components/DefaultLayout/Containers';
import {
	ContainerContentStyled,
	ContainerStyled,
} from '../../components/DefaultLayout/Containers/styled';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<ContainerStyled>
			<ContainerNav />
			<ContainerContentStyled>{children}</ContainerContentStyled>
			<ContainerNews />
		</ContainerStyled>
	);
};
