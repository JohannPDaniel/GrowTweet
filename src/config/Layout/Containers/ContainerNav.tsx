import { Link } from 'react-router-dom';
import { ContainerNavStyled } from './styled/ContainerNavStyled';
import { NavStyled } from './styled/NavStyled';
import growtweet from '../../../assets/growtweet.png';
import casa from '../../../assets/Imagens/light_color/icone_pagina inicial.svg';

export const ContainerNav = () => {
	return (
		<ContainerNavStyled>
			<div></div>
			<NavStyled>
				<img
					src={growtweet}
					alt='GrowTweet'
				/>

				<Link to=''>
					<img
						src={casa}
						alt='Pagina inicial'
					/>
					Pagina Inicial
				</Link>
			</NavStyled>
		</ContainerNavStyled>
	);
};
