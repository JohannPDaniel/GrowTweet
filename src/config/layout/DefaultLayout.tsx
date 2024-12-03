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
	isOpen?: boolean
	onClose?: () => void
}

const fallbackTweet: TweetTypes = {
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
	isOpen,
	onClose
}: DefaultLayoutProps ) => {
	return (
		<ContainerStyled>
			<ContainerNav
				tweet={tweet ?? fallbackTweet}
				onTweetAdded={onTweetAdded}
			/>
			<ContainerContentStyled>{children}</ContainerContentStyled>
			<ContainerNews />

			<EqualWidthNavigation
				isOpen={isOpen ?? true}
				onClose={onClose ?? (() => {})}
				onTweetCreated={onTweetAdded}
				tweet={tweet}
			/>
		</ContainerStyled>
	);
};
