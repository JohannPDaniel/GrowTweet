import { Container } from '../components/Login/Container';
import { FormLogin } from '../components/Login/FormLogin';
import { Presentation } from '../components/Login/Presentation';
import { TweeterLogin } from '../components/Login/TweeterLogin';

export const Login = () => {
	return (
		<Container>
			<TweeterLogin>
				<Presentation>
					<h1>Growtwitter</h1>
					<small>Trabalho final do bloco intermediário</small>

					<p>
						O Growtwitter é a plataforma definitiva para todos os apaixonados
						por redes sociais que buscam uma experiência familiar e poderosa,
						semelhante ao Twitter, mas com um toque único. Seja parte desta
						comunidade que valoriza a liberdade de expressão, a conexão com
						pessoas de todo o mundo e a disseminação de ideias.
					</p>
				</Presentation>
				<FormLogin>
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

					<button>Entrar</button>
				</FormLogin>
			</TweeterLogin>
		</Container>
	);
};
