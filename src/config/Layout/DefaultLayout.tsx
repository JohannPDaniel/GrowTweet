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
}

export const DefaultLayout = ({
	children,
	onTweetAdded,
}: DefaultLayoutProps) => {
	return (
		<ContainerStyled>
			<ContainerNav onTweetAdded={onTweetAdded} />

			<ContainerContentStyled>{children}</ContainerContentStyled>

			<ContainerNews />

			<EqualWidthNavigation />
		</ContainerStyled>
	);
};
