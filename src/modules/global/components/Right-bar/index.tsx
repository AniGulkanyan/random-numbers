import React, {ReactNode} from 'react';
import './styles.css';

export interface IRightBar {
    children: ReactNode;
}

function RightBar({children}: IRightBar) {
    return (
        <div className="rightBarContainer">
            {children}
        </div>
    );
}
export default RightBar;