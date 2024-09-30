import "./style.css";
import { ClearButton, SolidButton } from "../components/Button";


export function FlexRowSection({ children, style, id }) {
    const defaultStyle = {
        display: 'flex',
        flexDirection: 'row',
    };

    return (
        <section className="flex-row-section" style={{ ...defaultStyle, ...style }} id={id}>
            {children}
        </section>
    );
}

export function FlexColumnSection({ children, style, id }) {
    const defaultStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
    };

    return (
        <section className="flex-column-section" style={{ ...defaultStyle, ...style }} id={id}>
            {children}
        </section>
    );
}

export function BoxSection({ children, style, id, mexWidth, maxHeight }) {
    const defaultStyle = {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    };

    return (
        <section className="box-section" style={{ ...defaultStyle, ...style }} id={id}>
            {children}
        </section>
    );
}

export function PortfolioSection({ children, style, src, id }) {
    const defaultStyle = {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "3%"
    };

    return (
        <section className="box-section" style={{ ...defaultStyle, ...style }} id={id}>
            <img src={src} alt="" className="img-portfolio" />
            {children}
            <FlexRowSection>
                <ClearButton style={{ width: "90px", padding: "2%", fontSize: "15px"}}>GitHub</ClearButton>
                <SolidButton style={{ width: "90px", padding: "2%", fontSize: "15px"}}>Live Demo</SolidButton>
            </FlexRowSection>
        </section>
    );
}