import React, {MouseEvent, ReactNode} from 'react';
import Item from '../Item';
import './styles.css';

export interface IList {
    onClick?: (e: MouseEvent) => void;
    children?: ReactNode;
}

function List({onClick, children}: IList) {

    return (
        <div className="itemListContainer">
           <Item onClick={onClick} children={children}/>
        </div>
    )
}

export default List;