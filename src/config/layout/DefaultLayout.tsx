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
import { User } from '../types/User';

interface DefaultLayoutProps {
	children: React.ReactNode;
	onTweetAdded?: (tweet: TweetTypes) => void;
	tweet?: TweetTypes;
	user?: User;
	isOpen?: boolean;
	onClose?: () => void;
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
	user,
	isOpen,
	onClose,
}: DefaultLayoutProps) => {
	return (
		<ContainerStyled>
			<ContainerNav
				user={user}
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
