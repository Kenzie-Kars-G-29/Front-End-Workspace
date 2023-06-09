import styled from "styled-components";

const StyledCard = styled.li`

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0.625rem;
    width: 19.5rem;
    height: max-content;


.divImgCar {
    background-color: var(--color-grey5);
    border-radius: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.infoCar > h2 {
    font-size: var(--font-heading-7);
    font-weight: 600;
    color: var(--color-grey1);
    margin-bottom: 1rem;
}

.infoCar > p {
    font-size: var(--font-body-2);
    color: var(--color-grey2);
}

.infoUser { 
    display: flex;
    gap: 0.938rem;
}

.infoUser > span {
    background-color: var(--color-brand1);
    border-radius: 9.375rem;
    color: white;
    width: 1.563rem;
    height: 1.563rem;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.infoUser > p {
    color: var(--color-grey2);
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.infoCar2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.infoCar2 > div {
    display: flex;
    gap: 0.938rem;
}

.infoCar2 > p {
    color: var(--color-grey1);
    font-size: var(--font-heading-7);
}

.infoCar2 > div > span {
    width: 3.188rem;
    height: 2rem;
    font-size: 0.875rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    padding: 0.25rem, 0.5rem, 0.25rem, 0.5rem;
    background-color: var(--color-brand4);
    color: var(--color-brand1);
}
`

export default StyledCard