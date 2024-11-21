import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormContentStyled } from '../components/Login/FormContentStyled';
import { login } from '../config/services/auth.service';
import { inputsLogin } from '../config/types/InputLabel';
import { getDataHeaders } from '../config/utils/getDataHeaders';
import {
	InfoSectionStyled,
	LoginFormStyled,
	MainLoginStyled,
	SectionWrapperStyled,
} from '../components/Login';

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

		const dataHeaders = response.data?.token;

		if (checked) {
			localStorage.setItem('dataHeaders', JSON.stringify(dataHeaders));
		}
		sessionStorage.setItem('dataHeaders', JSON.stringify(dataHeaders));

		alert(response.message);
		navigate('/homepage');
	}

	useEffect(() => {
		if (dataHeaders?.token) {
			navigate('/homepage');
			return;
		}
		console.log('dataHeaders:', dataHeaders);
	}, [dataHeaders?.token, navigate]);

	return (
		<MainLoginStyled>
			<SectionWrapperStyled $minHeight>
				<InfoSectionStyled>
					<h1>Growtwitter</h1>
					<small>Trabalho final do bloco intermediário</small>

					<p>
						O Growtwitter é a plataforma definitiva para todos os apaixonados
						por redes sociais que buscam uma experiência familiar e poderosa,
						semelhante ao Twitter, mas com um toque único. Seja parte desta
						comunidade que valoriza a liberdade de expressão, a conexão com
						pessoas de todo o mundo e a disseminação de ideias.
					</p>
				</InfoSectionStyled>
				<LoginFormStyled>
					<h2>Entrar no Growtwitter</h2>
					<FormContentStyled onSubmit={onSubmit}>
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
						<button disabled={loading}>
							{loading ? 'Carregando...' : 'Entrar'}
						</button>
					</FormContentStyled>
				</LoginFormStyled>
			</SectionWrapperStyled>
		</MainLoginStyled>
	);
};
