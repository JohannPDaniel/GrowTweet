import { useNavigate } from "react-router-dom";
import { ProfileLogout } from '../components/DefaultLayout/ProfileLogout';
import { PageTitle } from '../components/Explorer/PageTitle';
import { Tweet } from '../components/HomePage/Tweet';
import { TitleContent } from '../components/ProfilePage/TitleContent';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { getDataHeaders } from "../config/utils/getDataHeaders";
import { useEffect } from "react";

export const ProfilePage = () => {
	const dataHeaders = getDataHeaders();
	const navigate = useNavigate();

	useEffect(() => {
		if (!dataHeaders?.token) {
			navigate('/');
			return;
		}
	}, []);

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
