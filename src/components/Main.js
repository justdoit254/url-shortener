import React, { useEffect } from "react";
import { StyledForm, StyledMain, Info, Card1, Card2, Card3, Icon, StyledCards, Bridge, CTA, StyledOutput, LongerLink, ShorterLink, NewLink } from "./styles/Main.styles";
import { CopyButton, GetStartedButton, ShortenItButton } from "./styles/Button.styles";

const Main = () => {
    const [longLink, setLongLink] = React.useState("");
    const [links, setLinks] = React.useState([]);
    const [clicked, setClicked] = React.useState(false)
    // const [shortLinks, setShortLinks] = React.useState([]);
    // const [output, setOutput] = React.useState("");
    // const [idx, setIdx] = React.useState(-1);
    // const [links, setLinks] = React.useState({longLinks: [], shortLinks: []})  //Object of arrays of links
    // const [links, setLinks] = React.useState([[],[]])  //Object of arrays of links

    function clipboardCopy(link) {
        navigator.clipboard.writeText(`${link.full_short_link}`)
    }

    const showLinks = links.map(link => {
        return (
            <StyledOutput>
                <LongerLink>{link.original_link}</LongerLink>
                {/* <LongerLink>{links[links.length - 1]}</LongerLink> */}
                {/* {links.map (link => (<LongerLink>{link}</LongerLink>))} */}
                <NewLink>
                    <ShorterLink>{link.full_short_link}</ShorterLink>
                    <CopyButton onClick={() => {
                        clipboardCopy(link);
                        setClicked(prevClicked => !prevClicked);
                    }}>
                        {clicked ? "Copied!" : "Copy"}
                    </CopyButton>
                    {/* <CopyButton onClick={() => {
                            navigator.clipboard.writeText(`${link.full_short_link}`)
                    }}>
                        {buttonText}
                    </CopyButton> */}
                </NewLink>
            </StyledOutput>
        )
    })
    // const showLinks = shortLinks.map(singleLink => {
    //     return (
    //         <StyledOutput>
    //             <LongerLink>{links[links.length - 1]}</LongerLink>
    //             {/* {links.map (link => (<LongerLink>{link}</LongerLink>))} */}
    //             <NewLink>
    //                 <ShorterLink>{singleLink}</ShorterLink>
    //                 <CopyButton>Copy</CopyButton>
    //             </NewLink>
    //         </StyledOutput>
    //     )
    // })


    const fetchShortLink = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.result.full_short_link)
                setLinks(prevLinks => [data.result, ...prevLinks])
                // setShortLinks(prevShortLinks => [...prevShortLinks, data.result.full_short_link])
                // setLinks(prevLink => {
                //     return [
                //         ...prevLink,
                //         shortLinks: (prevShortLinks => [data.result.full_short_link, ...prevShortLinks])
                //     ]
                // })
                // setOutput(data.result.full_short_link)
                // console.log(output)
            })
    }

    // React.useEffect(() => {
    //     fetchShortLink()
    // }, [])

    // function handleChange(event) {
    //    setLinks(prevLink => (
    //     [...prevLink, event.target.value]
    //    ))
    // //    setIdx(prevIdx => prevIdx + 1);
    //     //  setLinks(prevLink => {
    //     //     return {
    //     //         ...prevLink,
    //     //         longLinks: (prevLongLinks => [event.target.value, ...prevLongLinks])
    //     //     }
    //     //  })
    // }

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
                />
                <ShortenItButton type="submit" onClick={fetchShortLink}>Shorten It!</ShortenItButton>
            </StyledForm>
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