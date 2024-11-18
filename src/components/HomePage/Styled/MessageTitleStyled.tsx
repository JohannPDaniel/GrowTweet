import styled from "styled-components";

export const MessageTitleStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between; 

	> div {
		display: flex;
		align-items: center;
        gap: 8px
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
        align-items: center
	}

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        gap: 200px
    }

    @media screen and (min-width: 1440px) {
        gap: 370px
    }
`;
