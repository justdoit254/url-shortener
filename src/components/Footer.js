import React from "react";
import { Container, Icons, List, LogoImg, StyledFooter } from "./styles/Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <LogoImg src="./images/logo-white.svg" alt="Logo"/>
            <Container>
                <List>
                    <li>Features</li>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </List>
                <List>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </List>
                <List>
                    <li>Company</li>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </List>
                <Icons>
                    <img src="./images/icon-facebook.svg" alt="Facebook Link"/>
                    <img src="./images/icon-twitter.svg" alt="Twitter Link"/>
                    <img src="./images/icon-pinterest.svg" alt="Pinterest Link"/>
                    <img src="./images/icon-instagram.svg" alt="Instagram Link"/>
                </Icons>
            </Container>
        </StyledFooter>
    )
}

export default Footer