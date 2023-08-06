import { styled } from "styled-components";

export const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    /* background-color: #EFF1F5; */
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 30px;
    /* margin: 30px 100px; */
    /* padding: 10px; */
`

export const Logo = styled.img`
    width: 100px;
    height: 30px;
    margin-right: 10px;
`

export const PrimaryNav = styled.div`
    display: flex;
    min-width: 400px;
    justify-content: space-around;
    align-items: center;
    margin-left: 120px;
`
export const SecondaryNav = styled.div`
    display: flex;
    min-width: 180px;
    justify-content: space-around;
    margin-right: 120px;
`