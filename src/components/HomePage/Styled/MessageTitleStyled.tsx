import styled from 'styled-components';

export const MessageTitleStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> div {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	> div p {
		font-size: 14px;
		color: #555;
		display: flex;
		gap: 5px;
	}

	> div p span {
		font-size: 12px;
		color: #333;
		display: flex;
		align-items: center;
	}

	/* @media screen and (min-width: 320px) and (max-width: 374px) {
        gap: 100px
    }

    @media screen and (min-width: 375px) and (max-width: 424px) {
        gap: 150px
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        gap: 200px
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        gap: 125px
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        gap: 310px
    }

    @media screen and (min-width: 1440px) {
        gap: 300px
    } */
`;
