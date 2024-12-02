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
	onTweetDeleted: (deletedTweetId: string) => void;
}

export const Tweet = ({
	user,
	tweet,
	loading,
	onTweetUpdated,
	onTweetDeleted,
}: TweetProps) => {
	return (
		<TweetStyled>
			{tweet && user && (
				<PhotoMessage
					user={user}
					tweet={tweet}
					loading={loading}
					onTweetUpdated={onTweetUpdated}
					onTweetDeleted={onTweetDeleted}
				/>
			)}
			<LikeReply />
		</TweetStyled>
	);
};
