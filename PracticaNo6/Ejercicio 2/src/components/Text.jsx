import "./style.css";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Title({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        textAlign: "center",
    };

    return (
        <h1 className="title" style={{ ...defaultStyle, ...style }} id={id}>
            {children}
        </h1>
    );
}

export function TinyText({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "0.8em",
        fontWeight: "900",
        textAlign: "center",
        margin: "0.8%",
    };

    return <p className="tiny" style={{ ...defaultStyle, ...style }} id={id}>{children}</p>;
}

export function SmallText({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "1em",
        fontWeight: "900",
        textAlign: "center",
        margin: "1%",
    };

    return <p className="small" style={{ ...defaultStyle, ...style }} id={id}>{children}</p>;
}

export function MediumText({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "1.5em",
        fontWeight: "900",
        textAlign: "center",
        margin: "1.5%",
    };

    return <p className="medium" style={{ ...defaultStyle, ...style }} id={id}>{children}</p>;
}

export function LargeText({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "2.5em",
        fontWeight: "900",
        textAlign: "center",
        margin: "2.5%",
    };

    return <p className="large" style={{ ...defaultStyle, ...style }} id={id}>{children}</p>;
}

export function ExtraLargeText({ children, style, id }) {
    const defaultStyle = {
        color: "white",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "3em",
        fontWeight: "900",
        textAlign: "center",
        margin: "3%",
    };

    return <p className="extra-large" style={{ ...defaultStyle, ...style }} id={id}>{children}</p>;
}

export function ListText({ children, icon = faCircle, style, styleIcon, id }) {
    const defaultStyle = {
        color: "#4bb1f5",
    };
    
    return (
        <SmallText style={style} id={id}>
            <FontAwesomeIcon icon={icon} style={{ ...defaultStyle, ...styleIcon}} />
            {children}
        </SmallText>
    );
}

export function InputField({ placeholder, style, type, id }) {
    const defaultStyle = {
        color: "#4bb1f5",
        fontFamily: "'Quicksand', sans-serif"
    };

    return (
        <input type={type} className="input-field" style={{ ...defaultStyle, ...style }} placeholder={placeholder} id={id} />
    );
}

export function TextField({ placeholder, style, type, id }) {
    const defaultStyle = {
        color: "#4bb1f5",
        fontFamily: "'Quicksand', sans-serif",
        resize: "none"
    };

    return (
        <textarea type={type} className="text-field" style={{ ...defaultStyle, ...style }} placeholder={placeholder} id={id} />
    );
}

export function SubmitField({ value, placeholder, style, id }) {
    const defaultStyle = {
        color: "#4bb1f5",
        fontFamily: "'Quicksand', sans-serif",
        resize: "none"
    };

    return (
        <input type="submit" value={value} className="submit-field" style={{ ...defaultStyle, ...style }} placeholder={placeholder} id={id} />
    );
}
