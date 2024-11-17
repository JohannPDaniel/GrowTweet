import { ContainerLogos } from './ContainerLogos';
import { ContainerLogout } from './ContainerLogout';
import { ContainerNavStyled } from './styled';

interface ContainerNavProps {
	$isActive: boolean;
}

export const ContainerNav = ({ $isActive }: ContainerNavProps) => {
	return (
		<ContainerNavStyled $isActive={$isActive}>
			<ContainerLogos />
			<ContainerLogout />
			
		</ContainerNavStyled>
	);
};
