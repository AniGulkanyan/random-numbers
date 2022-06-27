import React from 'react';
import './styles.css';

interface IItem {
    onClick?: any;
    children?: any;
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