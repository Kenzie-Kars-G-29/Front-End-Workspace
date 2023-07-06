import styled from "styled-components";

export const FormDeleteAnnounStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
 
  h2 {
    font-size: 17px;
    margin-top: 15px;
  }
  
  h3 {
    font-size: 15px;
    font-weight: 300;
    color: var(--color-grey2);
  }

  .divBtn {
    display: flex;
    justify-content: space-between;
  }

  .divBtn > .btnDelete {
   background-color: var(--color-alert2);
   color: var(--color-alert1);
  }
`

export default FormDeleteAnnounStyled