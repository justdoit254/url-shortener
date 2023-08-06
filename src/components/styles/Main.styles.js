import { styled } from "styled-components";

export const StyledMain = styled.div`
    position: relative;
    margin-top: 125px;
    background-color: #EFF1F5;
    /* background-color: ${({theme}) => theme.colors.grayishViolet}; */
`
export const StyledForm = styled.div`
    background-color: ${({theme}) => theme.colors.darkViolet};
    display: flex;
    justify-content: space-evenly;
    padding: 30px 45px;
    width: 80%;
    margin: auto;
    background-image: url("./images/bg-shorten-desktop.svg");
    border: none;
    border-radius: 7px;
    position: relative;
    top: -45px;
    input {
        width: 78%;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        border: none;
        border-radius: 7px;
    }
    input::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.colors.gray};
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-weight: 900;
        font-size: 1.8em;
        margin-bottom: 10px;
    }
    p {
        font-size: 1.1em;
        font-weight: 600;
        line-height: 25px;
        color: ${({theme}) => theme.colors.gray};
        width: 40%;
        margin: 0;
        text-align: center;
    }
`
export const StyledCards = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 45px;
`

export const Card1 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    width: 25%;
    max-height: 210px;
    border: none;
    border-radius: 3px;
    padding: 0 25px;
    margin-left: 60px;
    z-index: 2;
    h3 {
        font-weight: 900;
        margin: 0;
    }
    p {
        margin: 15px 0;
        color: ${({theme}) => theme.colors.gray};
        padding-bottom: 25px;
    }
`
export const Card2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    width: 25%;
    max-height: 210px;
    border: none;
    border-radius: 3px;
    padding: 0 25px;
    margin-top: 36px;
    z-index: 2;
    h3 {
        font-weight: 900;
        margin: 0;
    }
    p {
        margin: 15px 0;
        color: ${({theme}) => theme.colors.gray};
        padding-bottom: 25px;
    }
`
export const Card3 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    width: 25%;
    max-height: 210px;
    border: none;
    border-radius: 3px;
    padding: 0 25px;
    margin-right: 60px;
    margin-top: 72px;
    z-index: 2;
    h3 {
        font-weight: 900;
        margin: 0;
    }
    p {
        margin: 15px 0;
        color: ${({theme}) => theme.colors.gray};
        padding-bottom: 25px;
    }
`

export const Icon = styled.div`
    padding: 15px;
    background-color: hsl(257, 27%, 26%);
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    position: relative;
    top: -30px;
    z-index: 2;
    img {
        width: 30px;
        height: 30px;
    }
`

export const Bridge = styled.div`
    height: 10px;
    width: 50%;
    background-color: ${({theme}) => theme.colors.cyan};
    position: relative;
    top: 200px;
    margin: auto;
    z-index: 1;
`

export const CTA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.darkViolet};
    background-image: url("./images/bg-boost-desktop.svg");
    background-size: cover;
    margin-top: 75px;
    padding: 36px;
    h2 {
        font-weight: 900;
        font-size: 1.8em;
        /* margin-bottom: 10px; */
        color: ${({theme}) => theme.colors.white};
    }
`

export const StyledOutput = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 3px;
    padding: 5px;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 80%;

`

export const LongerLink = styled.p`
    color: ${({theme}) => theme.colors.black};
    margin: auto 10px;
    font-weight: 600;
    font-size: 0.9em;
`

export const NewLink = styled.div`
    display: flex;
    align-items: center;
`

export const ShorterLink = styled.p`
    color: ${({theme}) => theme.colors.cyan};
    font-weight: 600;
`

