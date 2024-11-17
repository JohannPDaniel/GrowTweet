import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/Layout/DefaultLayout';

export const ProfilePage = () => {
	return (
		<DefaultLayout>
			<PageTitle>
				<TitleContent />
				<ProfileLogout
					$flexDirection
					$fontSize
					$border
					$maxWidth
				/>
			</PageTitle>
			<Tweet />
		</DefaultLayout>
	);
};
