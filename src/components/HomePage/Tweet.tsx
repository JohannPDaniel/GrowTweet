import { LikeReply } from "./LikeReply";
import { PhotoMessage } from "./PhotoMessage";
import { TweetStyled } from "./Styled/TweetStyled";

export const Tweet = () => {
	return (
		<TweetStyled>
			<PhotoMessage />
			<LikeReply />
		</TweetStyled>
	);
};
