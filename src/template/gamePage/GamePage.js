import React, {useState} from 'react';
import LeftPanel from '../../organism/leftPanel/LeftPanel';
import SudokuGrid from '../../organism/sudokuGrid/SudokuGrid';
import GameControl from "../../molecules/gameControl/GameControl";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './gamePage.scss';
import {useTranslation} from "react-i18next";

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
            if (solveSudoku()) {
                toast.success(t('translation:success'), {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        }
    };

    //Check if sudoku grid is valid
    function isSudokuValid(grid) {
        for (let row = 0; row < 9; row++) {
            const rowValues = [];
            for (let col = 0; col < 9; col++) {
                const cellValue = grid[row][col];
                if (cellValue !== 0 && rowValues.includes(cellValue)) {
                    return false;
                }
                rowValues.push(cellValue);
            }
        }

        for (let col = 0; col < 9; col++) {
            const colValues = [];
            for (let row = 0; row < 9; row++) {
                const cellValue = grid[row][col];
                if (cellValue !== 0 && colValues.includes(cellValue)) {
                    return false;
                }
                colValues.push(cellValue);
            }
        }

        for (let startRow = 0; startRow < 9; startRow += 3) {
            for (let startCol = 0; startCol < 9; startCol += 3) {
                const subgridValues = [];
                for (let row = startRow; row < startRow + 3; row++) {
                    for (let col = startCol; col < startCol + 3; col++) {
                        const cellValue = grid[row][col];
                        if (cellValue !== 0 && subgridValues.includes(cellValue)) {
                            return false;
                        }
                        subgridValues.push(cellValue);
                    }
                }
            }
        }

        return true;
    }

    //Resolve valid sudoku grid
    const solveSudoku = () => {
        const emptyCell = findEmptyCell(grid);

        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (isSafe(grid, row, col, num)) {
                const updatedGrid = [...grid];
                updatedGrid[row][col] = num;
                setGrid(updatedGrid);

                if (solveSudoku()) {
                    return true;
                }

                updatedGrid[row][col] = 0;
                setGrid(updatedGrid);
            }
        }

        return false;
    };


    function findEmptyCell(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    return [row, col];
                }
            }
        }
        return null;
    }

    function isSafe(grid, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (grid[row][i] === num) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (grid[i][col] === num) {
                return false;
            }
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (grid[i][j] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    const resetSudoku = () => {
        setActionStack([]);
        setGrid(initialGrid);
    };

    //Update cell value of Sudoku grid
    const updateCell = (row, col, newValue) => {
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
                <GameControl cancel={undoLastAction} onReset={resetSudoku} solveSudoku={() => handleSudoku()} resetDisable={actionStack.length === 0}/>
            </div>
        </div>
    );
};

export default GamePage;
