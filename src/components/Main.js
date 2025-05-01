import React from "react";
import { StyledForm, StyledMain, Info, Card1, Card2, Card3, Icon, StyledCards, Bridge, CTA, StyledOutput, LongerLink, ShorterLink, NewLink, ErrorMsg } from "./styles/Main.styles";
import { CopyButton, GetStartedButton, ShortenItButton } from "./styles/Button.styles";

const Main = () => {
    const [longLink, setLongLink] = React.useState("");
    const [links, setLinks] = React.useState([]);
    const [clicked, setClicked] = React.useState("")
    const [error, setError] = React.useState(false)
    function clipboardCopy(link) {
        navigator.clipboard.writeText(`${link.full_short_link}`)
        // alert("Copied the link to the clipboard");
    }
    //Making random changes in this file!!

    const showLinks = links.map(link => {
        return (
            <StyledOutput>
                <LongerLink>{link.original_link}</LongerLink>
                <NewLink>
                    <ShorterLink>{link.full_short_link}</ShorterLink>
                    <CopyButton 
                        onClick={() => {
                        clipboardCopy(link);
                        setClicked(link.code);
                        }}
                        // style = {{backgroundColor: link.code === clicked ? "${({theme}) => theme.colors.darkViolet}" : "${({theme}) => theme.colors.cyan}"}}
                    >
                        {link.code === clicked ? "Copied!" : "Copy"}
                    </CopyButton>
                </NewLink>
            </StyledOutput>
        )
    })


    const handleError = (response) => {
        if (!response.ok) {
            throw Error(response.error)
        } else {
            return response.json()
        }
    }

    const fetchShortLink = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
            .then(handleError)
            .then(data => {
                console.log(data)
                setLinks(prevLinks => [data.result, ...prevLinks])
                setError(prevError => !prevError)
            })
            .catch(error => {
                console.log(error)
                setError(prevError => !prevError)
            })
    }

    return (
        <StyledMain>
            <StyledForm>
                <input
                    id="linkId"
                    type="text"
                    name="link"
                    placeholder="    Shorten a link here..."
                    // value={links[links.length - 1]}
                    value={longLink}
                    onChange={e => setLongLink(e.target.value)}
                    style={{
                        border: error===true ? "3px solid hsl(0, 87%, 67%)" : "none",
                        // color: error === true ? "hsl(0, 87%, 67%)" : "${({theme}) => theme.colors.gray}"
                    }}
                />
                <ShortenItButton type="submit" onClick={fetchShortLink}>Shorten It!</ShortenItButton>
            </StyledForm>
            {error && <ErrorMsg>Please add a link</ErrorMsg>}
            {showLinks}
            <Info>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </Info>
            <Bridge />
            <StyledCards>
                <Card1>
                    <Icon>
                        <img src="./images/icon-brand-recognition.svg" alt="Brand Recognition" />
                    </Icon>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </Card1>
                <Card2>
                    <Icon>
                        <img src="./images/icon-detailed-records.svg" alt="Detailed Records" />
                    </Icon>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </Card2>
                <Card3>
                    <Icon>
                        <img src="./images/icon-fully-customizable.svg" alt="Fully Customizable" />
                    </Icon>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </Card3>
            </StyledCards>
            <CTA>
                <h2>Boost your links today</h2>
                <GetStartedButton>Get Started</GetStartedButton>
            </CTA>
        </StyledMain>
    )
}

export default Main