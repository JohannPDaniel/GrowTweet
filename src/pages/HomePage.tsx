import { PageTitle } from '../components/Explorer/PageTitle';
import { LikeReply } from "../components/HomePage/LikeReply";
import { PhotoMessage } from "../components/HomePage/PhotoMessage";
import { TweetStyled } from '../components/HomePage/Styled/TweetStyled';
import { DefaultLayout } from '../config/Layout/DefaultLayout';

export const HomePage = () => {
	return (
		<DefaultLayout>
			<PageTitle>Página Inicial</PageTitle>
			<TweetStyled>
				<PhotoMessage />
				<LikeReply />
			</TweetStyled>
		</DefaultLayout>
	);
};
