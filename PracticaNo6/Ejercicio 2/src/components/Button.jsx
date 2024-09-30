import "./style.css";

export function ClearButton({ children, width, height, href, style, onClick }) {
    const defaultStyle = {
        width: width,
        height: height,
        cursor: "pointer"
    };

    return (
        <a className="clear-button" onClick={onClick} href={href} style={{ ...defaultStyle, ...style }}>
            {children}
        </a>
    );
}

export function SolidButton({ children, width, height, href, style, onClick }) {
    const defaultStyle = {
        width: width,
        height: height,
        cursor: "pointer"
    };

    return (
        <a className="solid-button" onClick={onClick} href={href} style={{ ...defaultStyle, ...style }}>
            {children}
        </a>
    );
}

export function FacebookButton({ color = "#4267B2", href = "https://facebook.com", fontSize = "medium", style }) {
    const defaultStyle = {
        color: color,
    };

    return (
        <a href={href} className="social-button" style={{ ...defaultStyle, ...style }}>
            <i className="fa fa-facebook-f" style={{ fontSize: fontSize }}></i>
        </a>
    );
}

export function WhatsAppButton({ color = "#25D366", href = "https://whatsapp.com", fontSize = "medium", style }) {
    const defaultStyle = {
        color: color,
    };

    return (
        <a href={href} className="social-button" style={{ ...defaultStyle, ...style }}>
            <i className="fa fa-whatsapp" style={{ fontSize: fontSize }}></i>
        </a>
    );
}

export function InstagramButton({ color = "#E1306C", href = "https://instagram.com", fontSize = "medium", style }) {
    const defaultStyle = {
        color: color,
    };

    return (
        <a href={href} className="social-button" style={{ ...defaultStyle, ...style }}>
            <i className="fa fa-instagram" style={{ fontSize: fontSize }}></i>
        </a>
    );
}

export function LinkedInButton({ color = "#0077B5", href = "https://www.linkedin.com", fontSize = "medium", style }) {
    const defaultStyle = {
        color: color,
    };

    return (
        <a href={href} className="social-button" style={{ ...defaultStyle, ...style }}>
            <i className="fa fa-linkedin" style={{ fontSize: fontSize }}></i>
        </a>
    );
}
