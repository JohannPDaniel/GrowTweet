import { LoginRequest, SignUpRequest } from '../types/auth.types';
import { Headers } from "../types/headers";
import { User } from '../types/User';
import { api, ResponseApi } from './api.service';

export async function signUp(data: SignUpRequest) {
	try {
		const response = await api.post<ResponseApi<User>>('/users', data);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message,
		};
	}
}

export async function login(data: LoginRequest) {
	try {
		const response = await api.post<ResponseApi<Headers>>(
			'/login',
			data
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
		};
	}
}

export async function logout(data: Headers) {
	try {
		const response = await api.post<ResponseApi<Headers>>('logout', data, {
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
			message: error.response.data.message,
		};
	}
}
