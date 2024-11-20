import { Link } from 'react-router-dom';
import { InfoSection } from '../components/Login/InfoSection';
import { LoginForm } from '../components/Login/LoginForm';
import { MainLogin } from '../components/Login/MainLogin';
import { SectionWrapper } from '../components/Login/SectionWrapper';

const inputsLogin = [
	{
		htmlFor: "email",
		label: "Email:",
		type: "email",
		name: "email",
		id: "email"
	},
	{
		htmlFor: "password",
		label: "password:",
		type: "password",
		name: "password",
		id: "password"
	}
]

export const Login = () => {
	return (
		<MainLogin>
			<SectionWrapper $minHeight>
				<InfoSection>
					<h1>Growtwitter</h1>
					<small>Trabalho final do bloco intermediário</small>

					<p>
						O Growtwitter é a plataforma definitiva para todos os apaixonados
						por redes sociais que buscam uma experiência familiar e poderosa,
						semelhante ao Twitter, mas com um toque único. Seja parte desta
						comunidade que valoriza a liberdade de expressão, a conexão com
						pessoas de todo o mundo e a disseminação de ideias.
					</p>
				</InfoSection>
				<LoginForm>
					<h2>Entrar no Growtwitter</h2>
					<form>
						{inputsLogin.map((input, index) => (
							<div key={index}>
								<label htmlFor={input.htmlFor}>{input.label}</label>
								<input
									type={input.type}
									name={ input.name }
									id={input.id}
								/>
							</div>
						))}
						<p>
							Ainda não tem conta? <Link to='/signup'>Criar conta</Link>
						</p>
						<button>Entrar</button>
					</form>
				</LoginForm>
			</SectionWrapper>
		</MainLogin>
	);
};
