export function getDataHeaders() {
	const sessionData = JSON.parse(
		sessionStorage.getItem('dataHeaders') || 'null'
	);
	const localData = JSON.parse(localStorage.getItem('dataHeaders') || 'null');

	const data: DataTokens = sessionData ? sessionData : localData;

	return data ? { token: data.token } : null;
}

interface DataTokens {
	token: string;
	userId: string;
	tweetId: string;
	followerId: string
}
