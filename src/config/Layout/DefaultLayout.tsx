import { ContainerStyled } from './Containers/styled/ContainerStyled';
import { ContainerNav } from './Containers/ContainerNav';
import { ContainerNews } from './Containers/ContainerNews';

export const DefaultLayout = () => {
	return (
		<ContainerStyled>
			<ContainerNav />
			<div>DIV 2</div>
			<ContainerNews />
		</ContainerStyled>
	);
};
