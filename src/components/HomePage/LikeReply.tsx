import { iconeResponder, iconeCurtir } from "../../assets/Imagens/light_color";
import { LikeReplyStyled } from "./Styled/LikeReplyStyled";

export const LikeReply = () => {
	return (
		<LikeReplyStyled>
			<div>
				<img
					src={iconeResponder}
					alt='ícone de resposta'
				/>
				<span>0</span>
			</div>
			<div>
				<img
					src={iconeCurtir}
					alt='ícone de resposta'
				/>
				<span>0</span>
			</div>
		</LikeReplyStyled>
	);
};
