import "./Footer.scss";

export const Footer = () => {
    return (
        <div className="footer">
            &copy; Derryl Sayo {(new Date().getFullYear())}
        </div>
    )
};