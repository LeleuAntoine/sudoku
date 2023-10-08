import React, {useState} from 'react';
import LeftPanel from '../../organism/leftPanel/LeftPanel';
import SudokuGrid from '../../organism/sudokuGrid/SudokuGrid';
import GameControl from "../../molecules/gameControl/GameControl";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './gamePage.scss';
import {useTranslation} from "react-i18next";
import {isSudokuValid, solveSudoku} from "../../service/AlgorithmService";
import isEqual from 'lodash/isEqual';

const GamePage = () => {
    const initialGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const [actionStack, setActionStack] = useState([]);
    const [grid, setGrid] = useState(initialGrid);
    const {t} = useTranslation();
    const [isSolve, setIsSolve] = useState(false);

    const addActionToStack = (action) => {
        setActionStack((prevStack) => [...prevStack, action]);
    };

    const handleSudoku = () => {

        if (!isSudokuValid(grid)) {
            toast.error(t('translation:error'), {
                position: 'top-right',
                autoClose: 3000,
            });
        } else {
            setGrid(solveSudoku(grid));
            setIsSolve(true)
            toast.success(t('translation:success'), {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    //Reset grid to initial state
    const resetSudoku = () => {
        setActionStack([]);
        setIsSolve(false);
        setGrid(initialGrid);
    };

    //Update cell value of Sudoku grid
    const updateCell = (row, col, newValue) => {
        setIsSolve(false);
        addActionToStack({
            type: "assignValue",
            rowIndex: row,
            colIndex: col,
            previousValue: grid[row][col],
            newValue: newValue,
        })

        if (row >= 0 && row < 9 && col >= 0 && col < 9) {
            const updatedGrid = [...grid];
            updatedGrid[row][col] = newValue;
            setGrid(updatedGrid);
        }
    };

    // Cancel last action of user
    const undoLastAction = () => {
        if (actionStack.length > 0) {
            const lastAction = actionStack[actionStack.length - 1];
            const updatedGrid = [...grid];
            updatedGrid[lastAction.rowIndex][lastAction.colIndex] = lastAction.previousValue;
            setGrid(updatedGrid);
            setActionStack((prevStack) => prevStack.slice(0, -1));
        }
    };

    return (
        <div className={"game-page"}>
            <div className={'left-panel'}>
                <LeftPanel/>
            </div>
            <div className={"body-game"}>
                <ToastContainer position="top-right" autoClose={3000}/>
                <SudokuGrid
                    grid={grid}
                    onCellClick={(row, col, newValue) => {
                        updateCell(row, col, newValue);
                    }}
                />
                <GameControl
                    cancel={undoLastAction}
                    solveSudoku={() => handleSudoku()}
                    onReset={resetSudoku}
                    resetDisable={isEqual(initialGrid, grid)}
                    solveDisable={isSolve}
                    cancelDisable={actionStack.length === 0 || isSolve}
                />
            </div>
        </div>
    );
};

export default GamePage;
