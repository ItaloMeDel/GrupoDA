import React, { useState, useEffect } from 'react';
import "./style.css";
import { FlexRowSection } from "./Section";
import { SmallText } from "./Text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

export function Footer({ children, style }) {
    const [thumbsUpAmount, setThumbsUpCount] = useState(
        () => Number(localStorage.getItem('thumbsUpAmount')) || 0
    );
    const [thumbsDownAmount, setThumbsDownCount] = useState(
        () => Number(localStorage.getItem('thumbsDownAmount')) || 0
    );

    useEffect(() => {
        localStorage.setItem('thumbsUpAmount', thumbsUpAmount);
    }, [thumbsUpAmount]);

    useEffect(() => {
        localStorage.setItem('thumbsDownAmount', thumbsDownAmount);
    }, [thumbsDownAmount]);

    function thumbsUpClick() {
        setThumbsUpCount(thumbsUpAmount + 1);
    };

    function thumbsDownClick() {
        setThumbsDownCount(thumbsDownAmount + 1);
    };

    return (
        <footer style={style}>
            <FlexRowSection>
                <div onClick={thumbsUpClick} style={{ marginRight: "10px", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faThumbsUp} bounce style={{ color: "#000000", margin: "10px" }} />
                    <span>{thumbsUpAmount}</span>
                </div>
                <div onClick={thumbsDownClick} style={{ marginRight: "10px", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faThumbsDown} style={{ color: "#000000", margin: "10px" }} />
                    <span>{thumbsDownAmount}</span>
                </div>
            </FlexRowSection>
            <FlexRowSection>
                <a href="./" className="ref-link">Home</a>
                <a href="./" className="ref-link">Testimony</a>
                <a href="./ViewCV" className="ref-link">Service</a>
            </FlexRowSection>
            {children}
            <SmallText style={{ color: "black" }}>Universidad Católica de Santa María</SmallText>
        </footer>
    );
}

export default Footer;
