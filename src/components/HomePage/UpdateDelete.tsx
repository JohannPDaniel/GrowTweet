import { useState } from "react";
import {
	iconeApagar,
	iconeAtualizar,
	iconePontinhos,
} from '../../assets/Imagens/light_color';
import { UpsertModal } from "../Modal/UpsertModal";
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

interface UpdateDeleteProps {
	isOpen?: boolean;
	onClose?: (e: React.MouseEvent) => void;
}

export const UpdateDelete = ( { isOpen, onClose }: UpdateDeleteProps ) => {
	const [ isOpenModalUpdate, setIsOpenModalUpdate ] = useState( false )
	const closeModalUpdate = () => {
		setIsOpenModalUpdate(!isOpenModalUpdate)
	}
	return (
		<UpdateDeleteStyled $display={isOpen}>
			<img
				src={iconePontinhos}
				alt='Editar ou deletar'
				onClick={onClose}
			/>
			<div className='dropdown-content'>
				{upletes.map((uplete, index) => (
					<div
						key={index}
						className='dropdown-editar'
						onClick={closeModalUpdate}>
						<img
							src={uplete.image}
							alt={uplete.alt}
						/>
						<p>{uplete.name}</p>
					</div>
				))}
			</div>
			<UpsertModal
				isOpen={isOpenModalUpdate}
				onClose={closeModalUpdate}
			/>
		</UpdateDeleteStyled>
	);
};
