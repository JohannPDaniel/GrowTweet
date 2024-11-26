import { TweetTypes } from "../../../config/types/tweet.types";
import { ContainerLogos } from './ContainerLogos';
import { ContainerLogout } from './ContainerLogout';
import { ContainerNavStyled } from './styled';

interface ContainerNavProps {
	onTweetAdded?: (tweet: TweetTypes) => void; 
}


export const ContainerNav = ({onTweetAdded}: ContainerNavProps) => {
	return (
		<ContainerNavStyled>
			<ContainerLogos onTweetAdded={onTweetAdded!} />
			<ContainerLogout />
		</ContainerNavStyled>
	);
};
