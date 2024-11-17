import { iconeResponder, iconeCurtir } from "../../assets/Imagens/light_color";
import { LikeReplyStyled } from "./Styled/LikeReplyStyled";

const messageLikes = [
	{
        icone: iconeResponder,
        alt: 'ícone de resposta'
    },
    {
        icone: iconeCurtir,
        alt: "ícone de resposta"
    }
];

export const LikeReply = () => {
	return (
		<LikeReplyStyled>
			{messageLikes.map((messageLike) => (
				<div key={messageLike.alt}>
					<img
						src={messageLike.icone}
						alt={messageLike.alt}
					/>
					<span>0</span>
				</div>
			))}
		</LikeReplyStyled>
	);
};
