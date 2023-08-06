import { styled } from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.colors.black};
    padding: 50px 100px;
`

export const LogoImg = styled.img`
    width: 100px;
    height: 30px;
    margin-left: 36px;
`

export const Container = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.white};
    margin-left: 200px;
`

export const List = styled.ul`
    list-style-type: none;
    margin-top: 0;
    margin-right: 25px;
    li {
        margin-bottom: 10px;
        color: ${({theme}) => theme.colors.gray};
        cursor: pointer;
        &:hover {
            color: ${({theme}) => theme.colors.cyan};
        }
    }
    :first-child {
        font-weight: 600;
        margin-bottom: 15px;
        color: ${({theme}) => theme.colors.white};
        &:hover {
            color: ${({theme}) => theme.colors.white};
        }
    }
    
`

export const Icons = styled.div`
    display: flex;
    width: 15px;
    height: 20px;
    margin-left: 40px;

    img {
        margin-right: 15px;
        cursor: pointer;
        &:hover svg path{
            fill: ${({theme}) => theme.colors.cyan} !important;
        }
    }
`

// export const SM = styled.img