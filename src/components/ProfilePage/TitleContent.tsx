import { Link } from "react-router-dom";
import { iconeSeta } from "../../assets/Imagens/light_color";
import { TitleContentStyled } from "./styled/TitleContentStyled";
import { User } from "../../config/types/User";
import { TweetTypes } from "../../config/types/tweet.types";

interface TitleContentProps {
	tweet?: TweetTypes;
	user?: User;
	tweetCount: number;
}

export const TitleContent = ({ tweetCount, user }: TitleContentProps) => {
	return (
		<TitleContentStyled>
			<div>
				<Link to='/homepage'>
					<img
						src={iconeSeta}
						alt='Voltar para a página inicial'
					/>
				</Link>
			</div>
			<div>
				<p>
					Perfil de <span>@{user?.username}</span>
				</p>
				<p>
					<span>{tweetCount}</span> Tweets
				</p>
			</div>
		</TitleContentStyled>
	);
};
