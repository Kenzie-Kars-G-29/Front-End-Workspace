import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    var(--color-brand2) 38vh,
    var(--color-grey8) 38vh
  );
`;

export const StyledProfileView = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem;
    align-items: stretch;
  }
`;
