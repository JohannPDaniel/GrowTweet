 interface InputLabel {
	htmlFor: string;
	label: string;
	type: string;
	name: string;
	id: string;
}

export const inputLabels: InputLabel[] = [
	{
		htmlFor: 'nome',
		label: 'Nome:',
		type: 'text',
		name: 'nome',
		id: 'nome',
	},
	{
		htmlFor: 'email',
		label: 'Email:',
		type: 'email',
		name: 'email',
		id: 'email',
	},
	{
		htmlFor: 'username',
		label: 'Username:',
		type: 'text',
		name: 'username',
		id: 'username',
	},
	{
		htmlFor: 'password',
		label: 'Senha:',
		type: 'password',
		name: 'password',
		id: 'password',
	},
	{
		htmlFor: 'confirmPassword',
		label: 'Confirmar senha:',
		type: 'password',
		name: 'confirmPassword',
		id: 'confirmPassword',
	},
];