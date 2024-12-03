import { TweetTypes } from '../../../config/types/tweet.types';
import { User } from '../../../config/types/User';
import { ContainerLogos } from './ContainerLogos';
import { ContainerLogout } from './ContainerLogout';
import { ContainerNavStyled } from './styled';

interface ContainerNavProps {
	onTweetAdded?: (tweet: TweetTypes) => void;
	tweet: TweetTypes;
	user?: User;
}

export const ContainerNav = ({
	onTweetAdded,
	tweet,
	user,
}: ContainerNavProps ) => {

	return (
		<ContainerNavStyled>
			{onTweetAdded && (
				<ContainerLogos
					tweet={tweet}
					onTweetAdded={onTweetAdded}
				/>
			)}
			<ContainerLogout user={user} />
		</ContainerNavStyled>
	);
};
