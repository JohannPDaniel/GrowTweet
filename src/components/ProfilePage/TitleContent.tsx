import { Link } from "react-router-dom";
import { iconeSeta } from "../../assets/Imagens/light_color";
import { TitleContentStyled } from "./styled/TitleContentStyled";

export const TitleContent = () => {
	return (
		<TitleContentStyled>
			<div>
				<Link to='/'>
					<img
						src={iconeSeta}
						alt='Voltar para a página inicial'
					/>
				</Link>
			</div>
			<div>
				<p>
					Perfil de <span>@Grow</span>
				</p>
				<p>
					<span>X</span> Tweets
				</p>
			</div>
		</TitleContentStyled>
	);
};
