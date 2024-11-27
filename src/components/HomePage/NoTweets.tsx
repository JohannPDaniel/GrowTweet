import React from 'react';
import { NoTweetsStyled } from "./Styled/NoTweetsStyled";

interface NoTweets {
    $minHeight?: boolean
}

const NoTweets = ({$minHeight}: NoTweets) => {
	const text = 'Nenhum Tweet';

	return (
		<NoTweetsStyled $minHeight={$minHeight}>
			<div className='text'>
				{text.split('').map((letter, index) => (
					<span
						key={index}
						style={{ '--i': index } as React.CSSProperties}>
						{letter === ' ' ? '\u00A0' : letter}
					</span>
				))}
			</div>
		</NoTweetsStyled>
	);
};

export default NoTweets;
