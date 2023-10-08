import React from 'react';
import Button from '../../atoms/button/Button';
import './gameControl.scss';
import {faSync, faUndo} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";

const GameControl = ({onReset, cancel, solveSudoku, resetDisable, solveDisable, cancelDisable}) => {
    const {t} = useTranslation();

    return (
        <div className={'game-control'}>
            <Button
                label={t('translation:resetButton')}
                onClick={onReset}
                fontSize={1}
                size={1}
                classname={'warning-button'}
                icon={faSync}
                disable={resetDisable}
            />
            <Button
                label={t('translation:solveSudokuButton')}
                onClick={solveSudoku}
                fontSize={1}
                size={1}
                classname={'button-primary'}
                disable={solveDisable}
            />
            <Button
                label={t('translation:undoButton')}
                onClick={cancel}
                fontSize={1}
                size={1}
                classname={'button-secondary'}
                icon={faUndo}
                disable={cancelDisable}
            />
        </div>
    );
};

export default GameControl;
