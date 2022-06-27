import React, {MouseEvent, ReactNode} from 'react';
import './styles.css';

interface IItem {
    onClick?: (e: MouseEvent) => void;
    children?: ReactNode;
}

function Item({onClick, children}: IItem) {

    return (
        <>
            <div className="itemContainer">
                <div>
                    {children}
                </div>
                <button className="closeBtn" onClick={onClick}>X</button>
            </div>
        </>

    )
}

export default Item;