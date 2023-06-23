import styled from "styled-components";

export const ForgetPassContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-grey8);

    @media (max-width: 768px) {
    padding: 0 1rem;
    }
    `;

    export const ContainerFormStyled = styled.div`
    background-color: var(--color-grey10);
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    margin: auto;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);


    form {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    }

    form > input {
    background-color: var(--color-brand4);
    border: 1px solid var(--color-brand1);
    border-radius: 5px;
    width: 100%;
    height: 2.500rem;
    padding: 0.313rem;
    }

    form > label {
    font-size: 13px;
    }

    button {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 1rem;
        align-items: center;
    }

`
export const MessageError = styled.span`
    color: red;
    font-size: 0.75rem;
`