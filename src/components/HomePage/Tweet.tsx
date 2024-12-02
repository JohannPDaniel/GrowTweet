import { TweetTypes } from "../../config/types/tweet.types";
import { User } from "../../config/types/User";
import { LikeReply } from "./LikeReply";
import { PhotoMessage } from "./PhotoMessage";
import { TweetStyled } from "./Styled/TweetStyled";

interface TweetProps {
	user: User;
	tweet: TweetTypes;
	loading: boolean;
	onTweetUpdated: (updatedTweet: TweetTypes) => void; 
}

export const Tweet = ({ user, tweet, loading, onTweetUpdated }: TweetProps) => {
	return (
		<TweetStyled>
			{tweet && user && (
				<PhotoMessage
					user={user}
					tweet={tweet}
					loading={loading}
					onTweetUpdated={onTweetUpdated} // Passa o callback para PhotoMessage
				/>
			)}
			<LikeReply />
		</TweetStyled>
	);
};
