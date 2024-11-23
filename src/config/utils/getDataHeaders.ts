export function getDataHeaders() {
	const sessionData = sessionStorage.getItem('dataHeaders');
	const localData = localStorage.getItem('dataHeaders');
	const data = sessionData ?? localData;

	if (!data) {
		return null;
	}

	const parsedData = JSON.parse(data);
	return {
		token: parsedData.token,
		userId: parsedData.userId,
		tweetId: parsedData.tweetId,
		followerId: parsedData.followerId,
	};
}
