import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  padding: 5rem;
  background-color: var(--color-grey8);
`;

export const AdsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(25% - 3rem); 
  max-width: calc(25% - 3rem); 
  margin: 1.5rem; 

  @media (max-width: 1400px) {
    flex-basis: calc(33.33% - 3rem); 
    max-width: calc(33.33% - 3rem);
  }

  @media (max-width: 1060px) {
    flex-basis: calc(50% - 3rem); 
    max-width: calc(50% - 3rem);
  }

  @media (max-width: 768px) {
    flex-basis: calc(100% - 2rem); 
    max-width: calc(100% - 2rem); 
    scroll-snap-align: start;
    margin: 1rem; /
  }

  @media (max-width: 474px) {
    flex-basis: calc(100% - 2rem); 
    max-width: calc(100% - 2rem); 
    min-width: 320px; 
  }
`;

export const AdsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  align-self: flex-start;
`;
