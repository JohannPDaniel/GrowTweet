import {
	ContainerNav,
	ContainerNews,
} from '../../components/DefaultLayout/Containers';
import { EqualWidthNavigation } from '../../components/DefaultLayout/Containers/EqualWidthNavigation';
import {
	ContainerContentStyled,
	ContainerStyled,
} from '../../components/DefaultLayout/Containers/styled';
import { TweetTypes } from '../types/tweet.types';

interface DefaultLayoutProps {
	children: React.ReactNode;
	onTweetAdded?: (tweet: TweetTypes) => void;
	tweet?: TweetTypes;
}

const defaultTweet: TweetTypes = {
	id: '',
	content: '',
	type: '',
	createdAt: new Date().toLocaleDateString(),
	userId: '',
};

export const DefaultLayout = ({
	children,
	onTweetAdded,
	tweet,
}: DefaultLayoutProps) => {
	return (
		<ContainerStyled>
			<ContainerNav
				tweet={tweet ?? defaultTweet}
				onTweetAdded={onTweetAdded}
			/>

			<ContainerContentStyled>{children}</ContainerContentStyled>

			<ContainerNews />

			<EqualWidthNavigation />
		</ContainerStyled>
	);
};
