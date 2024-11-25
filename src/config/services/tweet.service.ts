import { Headers } from "../types/headers";
import { TweetId, TweetTypes } from '../types/tweet.types';
import { api, ResponseApi } from './api.service';

export async function GetTweet(id: TweetId, headers: Headers) {
	try {
		const response = await api.get<ResponseApi<TweetTypes>>(`tweets/${id}`, {
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
			success: error.response.data.success,
			message: `Erro: ${error.response.data.message}`,
		};
	}
}
