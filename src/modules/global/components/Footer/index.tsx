import React, {ReactNode} from "react";
import './styles.css';

export interface IFooter {
    children: ReactNode;
}

function Footer({children}: IFooter) {
    return (
        <div className="footerContainer">
            {children}
        </div>
    );
}

export default Footer;