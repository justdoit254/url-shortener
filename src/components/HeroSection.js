import React from "react";
import { HeroImage, LeftHero, StyledHeroSection } from "./styles/HeroSection.styles";
import { GetStartedButton } from "./styles/Button.styles";

const HeroSection = () => {
    return (
        <StyledHeroSection>
            <LeftHero>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <GetStartedButton>Get Started</GetStartedButton>
            </LeftHero>
            <HeroImage src="./images/illustration-working.svg" alt="Woman working on laptop"/>
        </StyledHeroSection>
    )
}

export default HeroSection