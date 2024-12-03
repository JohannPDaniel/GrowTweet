import { TweetTypes } from "../../../config/types/tweet.types";
import { ContainerLogos } from './ContainerLogos';
import { ContainerLogout } from './ContainerLogout';
import { ContainerNavStyled } from './styled';

interface ContainerNavProps {
	onTweetAdded?: ( tweet: TweetTypes ) => void; 
	tweet: TweetTypes
}

export const ContainerNav = ({onTweetAdded, tweet}: ContainerNavProps) => {
	return (
		<ContainerNavStyled>
			{onTweetAdded &&(
				<ContainerLogos
					tweet={tweet}
					onTweetAdded={onTweetAdded}
				/>
			)}
			<ContainerLogout />
		</ContainerNavStyled>
	);
};
