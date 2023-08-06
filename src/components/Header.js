import React from "react";
import { Logo, PrimaryNav, SecondaryNav, StyledHeader } from "./styles/Header.styles";
import { RoundButton, TextButton } from "./styles/Button.styles";

const Header = () => {
    return (
        <StyledHeader>
            <PrimaryNav>
                <Logo src="./images/logo.svg" alt="Logo"/>
                <TextButton>Features</TextButton>
                <TextButton>Pricing</TextButton>
                <TextButton>Resources</TextButton>
            </PrimaryNav>
            <SecondaryNav>
                <TextButton>Login</TextButton>
                <RoundButton>Sign Up</RoundButton>
            </SecondaryNav>
        </StyledHeader>
    )
}

export default Header