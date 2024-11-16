import { iconeLogoGrowdev } from "../../assets/Imagens/light_color";
import { PhotoProfileStyled } from "../DefaultLayout";
import { PhotoMessageStyled, MessageStyled } from "./Styled/PhotoMessageStyled";

export const PhotoMessage = () => {
	return (
		<PhotoMessageStyled>
			<PhotoProfileStyled
				src={iconeLogoGrowdev}
				alt='imagem da pessoa'
			/>
			<MessageStyled>
				<div>
					<strong>Emanoel</strong>
					<p>
						@ema <span>&bull; 3h</span>
					</p>
				</div>
				<p>Tô de olhooo ein</p>
			</MessageStyled>
		</PhotoMessageStyled>
	);
};
