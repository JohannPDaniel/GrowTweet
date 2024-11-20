import { Link, useNavigate } from 'react-router-dom';
import { InfoSection } from '../components/Login/InfoSection';
import { LoginForm } from '../components/Login/LoginForm';
import { MainLogin } from '../components/Login/MainLogin';
import { SectionWrapper } from '../components/Login/SectionWrapper';
import { FormContentStyled } from '../components/Login/FormContentStyled';
import { inputsLogin } from '../config/types/InputLabel';
import { useEffect, useState } from 'react';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import { login } from "../config/services/auth.service";

export const Login = () => {
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dataHeaders = getDataHeaders();

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const dataBody = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
		};
		setLoading(true);
		const response = await login(dataBody);
		setLoading(false);

		if (!response.success) {
			alert(response.message);
			return;
		}

		const dataTokens = {
			token: response.data?.token,
			studentId: response.data?.studentId,
		};

		if (checked) {
			localStorage.setItem('dataHeaders', JSON.stringify(dataTokens));
		}
		sessionStorage.setItem('dataHeaders', JSON.stringify(dataTokens));

		alert(response.message);
		navigate('/home');
	}

		useEffect(() => {
			if (dataHeaders?.token) {
				navigate('/home');
				return;
			}
		}, [dataHeaders?.token, navigate]);


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
					<FormContentStyled>
						{inputsLogin.map((input, index) => (
							<div
								key={index}
								className='input-login'>
								<label htmlFor={input.htmlFor}>{input.label}</label>
								<input
									type={input.type}
									name={input.name}
									id={input.id}
									required
								/>
							</div>
						))}
						<div className='check-logged'>
							<input
								type='checkbox'
								id='logged'
								checked={checked}
								onChange={() => setChecked(!checked)}
							/>
							<label htmlFor='logged'>Deseja permanecer logado?</label>
						</div>
						<p>
							Ainda não tem conta? <Link to='/signup'>Criar conta</Link>
						</p>
						<button disabled={loading}>Entrar</button>
					</FormContentStyled>
				</LoginForm>
			</SectionWrapper>
		</MainLogin>
	);
};
