import { Headers } from '../types/headers';
import { TweetContent, TweetTypes } from '../types/tweet.types';
import { api, ResponseApi } from './api.service';

export async function createTweet(body: TweetContent, headers: Headers) {
	try {
		const response = await api.post<ResponseApi<TweetTypes>>('/tweets', body, {
			headers: {
				Authorization: headers.token,
				'x-user-id': headers.userId,
			},
		});

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response?.data?.success,
			message: `Erro: ${error.response?.data?.message}`,
		};
	}
}

export async function getTweet(headers: Headers) {
	try {
		const response = await api.get<ResponseApi<TweetTypes[]>>(`/tweets`, {
			headers: {
				Authorization: headers.token,
			},
		});

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: `Erro: ${error.response.data.message}`,
		};
	}
}
export async function putTweet(id: string, content: string, headers: Headers) {
	try {
		const response = await api.put<ResponseApi<TweetTypes>>(
			`/tweets/${id}`,
			{ content },
			{
				headers: {
					Authorization: headers.token,
					'x-user-id': headers.userId,
				},
			}
		);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message,
			data: error.response.data.data,
		};
	}
}
export async function deleteTweet(id: string, headers: Headers) {
	try {
		const response = await api.delete<ResponseApi<TweetTypes>>(
			`/tweets/${id}`,
			{
				headers: {
					Authorization: headers.token,
				},
			}
		);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message,
			data: error.response.data.data,
		};
	}
}
