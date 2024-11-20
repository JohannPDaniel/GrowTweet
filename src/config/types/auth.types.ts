export interface SignUpRequest {
	name: string;
	email: string;
	username: string;
	password: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}
