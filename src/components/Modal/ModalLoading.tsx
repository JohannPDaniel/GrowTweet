import { Loader } from './Loader';
import { ModalRootStyled } from './ModalStyled';

export const ModalLoading = () => {
	return (
		<>
			<ModalRootStyled $backColor='white'>
				<Loader></Loader>
			</ModalRootStyled>
		</>
	);
};
