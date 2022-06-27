import React, {ReactNode} from 'react';
import './styles.css';

export interface ILeftBar {
    children: ReactNode;
}

function LeftBar({children}: ILeftBar) {
    return (
        <div className="leftBarContainer">
            {children}
        </div>
    );
}
 export default LeftBar;