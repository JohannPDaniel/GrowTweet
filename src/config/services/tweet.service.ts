import { HeadersForTweet } from "../types/headers";
import { CreateTweet } from '../types/tweet.types';
import { api } from './api.service';

export async function tweet(body: CreateTweet, headers: HeadersForTweet) {
	try {
		const response = await api.post('tweets', body, {
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
