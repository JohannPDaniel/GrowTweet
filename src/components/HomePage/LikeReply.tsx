import { iconeResponder, iconeCurtir } from "../../assets/Imagens/light_color";
import { LikeReplyStyled } from "./Styled/LikeReplyStyled";

const messageLikes = [
	{
		id: "1",
        icone: iconeResponder,
        alt: 'ícone de resposta'
    },
	{
		id: "2",
        icone: iconeCurtir,
        alt: "ícone de resposta"
    }
];

export const LikeReply = () => {
	return (
		<LikeReplyStyled>
			{messageLikes.map((messageLike) => (
				<div key={messageLike.id}>
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
