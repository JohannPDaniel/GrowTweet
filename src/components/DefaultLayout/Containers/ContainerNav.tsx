import { ContainerLogos } from './ContainerLogos';
import { ContainerLogout } from './ContainerLogout';
import { ContainerNavStyled } from './styled';


export const ContainerNav = () => {
	return (
		<ContainerNavStyled >
			<ContainerLogos />
			<ContainerLogout />		
		</ContainerNavStyled>
	);
};
