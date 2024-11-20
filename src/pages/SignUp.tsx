import { MainLogin } from '../components/Login/MainLogin';
import { SectionWrapper } from '../components/Login/SectionWrapper';
import { ContentSignUp } from '../components/SignUp/ContentSignUp';
import { inputLabels } from '../config/types/InputLabel';

export const SignUp = () => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data = {
			name: e.currentTarget.nome.value,
			email: e.currentTarget.email.value,
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value,
		};

		const confirmPassword = e.currentTarget.confirmPassword.value;

		if (data.password !== confirmPassword) {
			alert('As senhas não são iguais !');
			return;
		}
	}

	return (
		<MainLogin $flexDirection>
			<SectionWrapper
				$minWidth
				$maxWidth
				$flexBasis
				$flexDirection>
				<ContentSignUp>
					<h1>Cadastro de usuário</h1>

					<form onSubmit={handleSubmit}>
						{inputLabels.map((inputLabel, index) => (
							<div key={index}>
								<label htmlFor={inputLabel.htmlFor}>{inputLabel.label}</label>
								<input
									type={inputLabel.type}
									name={inputLabel.name}
									id={inputLabel.id}
									required
								/>
							</div>
						))}
						<div className='buttons'>
							<button type='reset'>cancelar</button>
							<button type='submit'>Cadastrar</button>
						</div>
					</form>
				</ContentSignUp>
			</SectionWrapper>
		</MainLogin>
	);
};
