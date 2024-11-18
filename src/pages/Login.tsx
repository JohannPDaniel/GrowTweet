import { Link } from "react-router-dom";
import { InfoSection } from "../components/Login/InfoSection";
import { LoginForm } from "../components/Login/LoginForm";
import { MainLogin } from "../components/Login/MainLogin";
import { SectionWrapper } from "../components/Login/SectionWrapper";

export const Login = () => {
	return (
		<MainLogin>
			<SectionWrapper>
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
					<div>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
						/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='text'
							name='password'
						/>
					</div>

					<p>Ainda não tem conta? <Link to="">Criar conta</Link></p>

					<button>Entrar</button>
				</LoginForm>
			</SectionWrapper>
		</MainLogin>
	);
};
