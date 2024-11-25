import { Headers } from "../types/headers";
import { User } from '../types/User';
import { api, ResponseApi } from './api.service';

export async function getUser(userId: string, data: Headers) {
	try {
		const response = await api.get<ResponseApi<User>>(`users/${userId}`, {
			headers: {
				Authorization: data.token,
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
