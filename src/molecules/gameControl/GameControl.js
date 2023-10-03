import React from 'react';
import Button from '../../atoms/button/Button';
import './gameControl.scss';

const GameControl = ({onReset, onAutoPosition}) => {
    return (
        <div className="game-control">
            <Button label="Réinitialisation" onClick={onReset} fontSize={1} size={1}/>
            <Button label="Positionnement auto" onClick={onAutoPosition} fontSize={1} size={1}/>
        </div>
    );
};

export default GameControl;
