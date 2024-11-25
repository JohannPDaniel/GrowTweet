interface DataHeaders {
	token: string;
	userId: string;
	tweetId: string;
	followerId: string;
}
export function getDataHeaders(): DataHeaders {
	const sessionData = sessionStorage.getItem('dataHeaders');
	const localData = localStorage.getItem('dataHeaders');
	const data = sessionData ?? localData;

	if (!data) {
		return {
			token: '',
			userId: '',
			tweetId: '',
			followerId: '',
		};
	}

	const parsedData = JSON.parse(data);
	return {
		token: parsedData.token || '',
		userId: parsedData.userId || '',
		tweetId: parsedData.tweetId || '',
		followerId: parsedData.followerId || '',
	};
}
