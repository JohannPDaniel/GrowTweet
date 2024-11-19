import styled from 'styled-components';

export const ContentSignUp = styled.div`
	width: 100%;
	height: auto;
	min-width: 400px;
	background-color: #fff;
	padding: 20px;
    text-align: center;
    
    h1 {
        padding-bottom: 10px
    }

	div {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start; 
		justify-content: center;
		gap: 5px;
	}

	label {
		width: 100%;
		height: auto;
		display: flex;
		margin-top: 10px;
	}

	div:first-of-type > label:first-of-type {
		margin-top: 0;
	}

	input {
		width: 100%;
		height: auto;
		padding: 8px;
		border-radius: 8px;
		border: 1px solid #e0e0e0;
		outline: none; 
		transition: border-color 0.3s, box-shadow 0.3s;

		&:focus {
			border-color: #007bff;
			box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
		}
	}
`;
