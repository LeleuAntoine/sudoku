import React, {useState} from 'react';
import Label from "../../atoms/label/Label";
import Button from "../../atoms/button/Button";
import Square from "../../atoms/square/Square";
import './leftPanel.scss';

const LeftPanel = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems([...items, Math.floor(Math.random() * 9) + 1]);
    };

    return (
        <div className="left-panel">
            <Label color={'#FF0000'} fontSize={2} text={'Test Label'}/>
            <Button onClick={handleAddItem} size={1} fontSize={1} label={'+'}/>

            <ul>
                {items.map((item, index) => (
                    <Square key={index} size={2} fontSize={1} value={item}/>
                ))}
            </ul>
        </div>
    );
};

export default LeftPanel;

