import React from 'react';
import Button from '../../atoms/button/Button';
import './gameControl.scss';

const GameControl = ({onReset, cancel, solveSudoku}) => {
    return (
        <div className={'game-control'}>
            <Button
                label={'Réinitialisation'}
                onClick={onReset}
                fontSize={1}
                size={1}
                classname={'warning-button'}
            />
            <Button
                label={'Résoudre le Sudoku'}
                onClick={solveSudoku}
                fontSize={1}
                size={1}
                classname={'button-primary'}
            />
            <Button
                label={'Annuler'}
                onClick={cancel}
                fontSize={1}
                size={1}
                classname={'button-secondary'}
            />
        </div>
    );
};

export default GameControl;
