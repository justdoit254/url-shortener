import { styled } from "styled-components";

export const TextButton = styled.button`
    border: none;
    font-weight: bold;
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.gray};
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.colors.black};
    }
`

export const RoundButton = styled.button`
    padding: 10px 20px;
    background-color: ${({theme}) => theme.colors.cyan};
    border: 0.1px solid ${({theme}) => theme.colors.cyan};
    border-radius: 50px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 700;
    cursor: pointer;
`
export const GetStartedButton = styled.button`
    padding: 10px 30px;
    background-color: ${({theme}) => theme.colors.cyan};
    border: 0.1px solid ${({theme}) => theme.colors.cyan};
    border-radius: 50px;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
`
export const ShortenItButton = styled.button`
    padding: 10px 25px;
    background-color: ${({theme}) => theme.colors.cyan};
    border: 0.1px solid ${({theme}) => theme.colors.cyan};
    border-radius: 7px;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
`

export const CopyButton = styled.button`
    padding: 7px 25px;
    background-color: ${({theme}) => theme.colors.cyan};
    border: 0.1px solid ${({theme}) => theme.colors.cyan};
    border-radius: 7px;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.1em;
    font-weight: 700;
    margin: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.03);
        transition: all, 0.5s;
    }
    &:focus, &:active, &:visited{
        background-color: ${({theme}) => theme.colors.darkViolet};
        border: 0.1px solid ${({theme}) => theme.colors.darkViolet};
    }

`