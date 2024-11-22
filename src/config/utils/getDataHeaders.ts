export function getDataHeaders() {
	const sessionData = sessionStorage.getItem('dataHeaders');
	const localData = localStorage.getItem('dataHeaders');

	const data = sessionData ?? localData

	return data ? JSON.parse(data) : null;
}
