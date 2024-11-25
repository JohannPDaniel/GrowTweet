import { PhotoMessage } from './PhotoMessage';
import { LikeReply } from './LikeReply';
import { TweetStyled } from './Styled/TweetStyled';
import { User } from '../../config/types/User';
import { TweetTypes } from '../../config/types/tweet.types';

interface TweetProps {
	user: User;
	tweet: TweetTypes;
	loading: boolean;
}

export const Tweet = ({ user, tweet, loading }: TweetProps) => {
	return (
		<TweetStyled>
			<PhotoMessage
				user={user}
				tweet={tweet}
				loading={loading}
			/>
			<LikeReply />
		</TweetStyled>
	);
};
