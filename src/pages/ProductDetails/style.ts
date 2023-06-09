import styled from 'styled-components';

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  background: linear-gradient(to bottom, #5126EA 33%, #F1F3F5 0%);
  
  .left-column {
    display: flex;
    flex-direction: column;
    width:80%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
   
  }

  .right-column {
    display: flex;
    flex-direction: column;
    width: 37%;
    align-items: center;
    gap: 5rem;
    margin-top:4.5rem
  }
`;

export default StyledProductDetails;
