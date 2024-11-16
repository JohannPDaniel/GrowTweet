import styled from 'styled-components';

export const LikeReplyStyled = styled.div`
	width: 100%;
	display: flex;

	> div {
		display: flex;
		gap: 4px;
		margin-left: 45px;

        &:last-child {
            margin-left: 20px;
        }

		&:hover {
			filter: brightness(0) saturate(100%) invert(39%) sepia(94%)
				saturate(9128%) hue-rotate(0deg) brightness(91%) contrast(91%);
		}
	}

	img {
		width: 12px;
		height: auto;
		cursor: pointer;
		transition: transform 0.2s ease;

		&:hover {
			transform: scale(1.2);
		}
	}

	span {
		font-size: 12px;
		color: #82829e;
	}
`;
