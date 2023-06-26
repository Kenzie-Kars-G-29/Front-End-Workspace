import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;
}
select {
    outline: 0;
    box-shadow: none;
    flex: 1;
    padding: 0 0.5em;
    cursor: pointer;
    font-size: 1em;
}
select::-ms-expand {
   display: none;
}
input{
    outline: none;
    border: none;
    background-color: unset;
}
button{
    border: none;
    background-color: unset;
    cursor: pointer;
}

ul, ol, li{
    list-style: none;
}
`;

export default Reset;
