import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;
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

export default Reset
