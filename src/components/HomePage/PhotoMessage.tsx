import { useState } from 'react';
import {
	iconeApagar,
	iconeAtualizar,
	iconeLogoGrowdev,
	iconePontinhos,
} from '../../assets/Imagens/light_color';
import { PhotoProfileStyled } from '../DefaultLayout/Styled';
import { MessageTitleStyled } from './Styled/MessageTitleStyled';
import { MessageStyled, PhotoMessageStyled } from './Styled/PhotoMessageStyled';
import { UpdateDeleteStyled } from './Styled/UpdateDeleteStyled';

const upletes = [
	{
		image: iconeAtualizar,
		alt: 'Atualizar',
		name: 'Editar',
	},
	{
		image: iconeApagar,
		alt: 'Apagar',
		name: 'Deletar',
	},
];

export const PhotoMessage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return (
		<PhotoMessageStyled onClick={closeDropdown}>
			<PhotoProfileStyled
				src={iconeLogoGrowdev}
				alt='imagem da pessoa'
			/>
			<MessageStyled>
				<MessageTitleStyled>
					<div>
						<strong>Emanoel</strong>
						<p>
							@ema <span>&bull; 3h</span>
						</p>
					</div>
					<UpdateDeleteStyled $display={isOpen}>
						<img
							src={iconePontinhos}
							alt='Editar ou deletar'
							onClick={toggleDropdown}
						/>
						<div className='dropdown-content'>
							{upletes.map((uplete, index) => (
								<div
									key={index}
									className='dropdown-editar'>
									<img
										src={uplete.image}
										alt={uplete.alt}
									/>
									<p>{uplete.name}</p>
								</div>
							))}
						</div>
					</UpdateDeleteStyled>
				</MessageTitleStyled>
				<p>Tô de olhooo ein</p>
			</MessageStyled>
		</PhotoMessageStyled>
	);
};
