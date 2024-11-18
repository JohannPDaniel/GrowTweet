import { PhotoMessage } from './PhotoMessage';
import { LikeReply } from './LikeReply';
import { TweetStyled } from './Styled/TweetStyled';

export const Tweet = () => {
	return (
		<TweetStyled>
			<PhotoMessage />
			<LikeReply />
		</TweetStyled>
	);
};
