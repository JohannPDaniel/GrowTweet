import { PhotoMessage } from './PhotoMessage';
import { LikeReply } from './LikeReply';
import { TweetStyled } from './Styled/TweetStyled';
import { User } from '../../config/types/User';

interface TweetProps {
	user: User;
	loading: boolean
}

export const Tweet = ({ user, loading }: TweetProps) => {
	return (
		<TweetStyled>
			<PhotoMessage
				user={ user }
				loading={loading}
			/>
			<LikeReply />
		</TweetStyled>
	);
};
