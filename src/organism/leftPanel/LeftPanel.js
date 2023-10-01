import React, { useState } from 'react';
import Label from "../../atoms/label/Label";
import Button from "../../atoms/button/Button";
import Square from "../../atoms/square/Square";
import './leftPanel.scss';

const LeftPanel = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems([...items, Math.floor(Math.random() * 9) + 1]);
    };

    const handleSolveSudoku = () => {
        // Logique pour résoudre le Sudoku en utilisant les valeurs de 'items'
        // Cette logique dépendra de votre implémentation du Sudoku Solver
        // Ici, je suppose simplement une alerte pour l'exemple.
        alert("Sudoku résolu !");
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

            <Button onClick={handleSolveSudoku} size={2} fontSize={1} label={'Résoudre le Sudoku'}/>
        </div>
    );
};

export default LeftPanel;

