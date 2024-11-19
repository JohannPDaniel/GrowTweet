import { MainLogin } from '../components/Login/MainLogin';
import { SectionWrapper } from '../components/Login/SectionWrapper';
import { ContentSignUp } from '../components/SignUp/ContentSignUp';

const inputLabels = [
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

export const SignUp = () => {
	return (
		<MainLogin>
			<SectionWrapper
				$minWidth
				$maxWidth
				$flexBasis
				$flexDirection>
				<ContentSignUp>
					<h1>Cadastro de usuário</h1>
					
					{inputLabels.map((inputLabel, index) => (
						<div key={index}>
							<label htmlFor={inputLabel.htmlFor}>{inputLabel.label}</label>
							<input
								type={inputLabel.type}
								name={inputLabel.name}
								id={inputLabel.id}
							/>
						</div>
					))}
				</ContentSignUp>
			</SectionWrapper>
		</MainLogin>
	);
};
