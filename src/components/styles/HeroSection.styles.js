import { styled } from "styled-components";

export const StyledHeroSection = styled.div`
    display: flex;
    margin: 30px 100px;
    /* position: relative; */
    h1 {
        font-weight: 900;
        font-size: 4em;
        letter-spacing: -1px;
        word-spacing: -1.5px;
        line-height: 75px;
        margin: 0;
    }

    p {
        font-size: 1.2em;
        font-weight: 600;
        line-height: 25px;
        color: ${({theme}) => theme.colors.gray};
    }
        
`

export const LeftHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    max-width: 560px;
    margin-top: 30px;
`

export const HeroImage = styled.img`
    width: 575px;
    height: 375px;
    position: absolute;
    top: 125px;
    right: -72px;
    overflow-x: hidden;
`