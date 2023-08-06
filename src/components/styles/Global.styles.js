import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;900&display=swap');
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif; 
    }
    body {
        margin: 0;
        overflow-x: hidden;
        background-color: ${({theme}) => theme.colors.white};
        /* background-color: #EFF1F5; */
    }
`

export default GlobalStyles