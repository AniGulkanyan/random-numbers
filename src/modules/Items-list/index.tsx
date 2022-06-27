import React, {useState} from 'react';
import './styles.css';
import List from "../global/components/List";
import Header from "../global/components/Header";
import Footer from "../global/components/Footer";

function ItemsList() {
    const [list, setList] = useState<number[]>([]);

    const remove = (currentItem: number) => {
        setList(list.filter((item) => item !== currentItem));
    };

    const add = (max: number, min: number) => {
        const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const newArr = new Set([...list, newNumber]);
        if (list.indexOf(newNumber) !== -1) {
            alert('Duplicate number');
        }
        setList(Array.from(newArr));
    };

    const sort = () => {
        const sortedArr = [...list].sort((a: number, b: number) => a - b);
        setList(sortedArr);
    }

    return (
        <div className="container">
            <div className="container__header">
                <Header>
                    <button className="addCards" onClick={() => add(100, 1)}>Add Cards</button>
                    <button className="sortCards" onClick={sort}>Sort Cards</button>
                </Header>
            </div>
            <div className="container__content listContainer">
                {list.map((item: number, index: number) => {
                    return <List onClick={() => remove(item)} key={`${item}-${index}`}>{item}</List>
                })}
            </div>
            <div className="container__footer">
                <Footer>
                    <h4 className="footerTxt">
                        Footer
                    </h4>
                </Footer>
            </div>
        </div>
    )
}

export default ItemsList;