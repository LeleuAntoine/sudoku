import React, {useRef, useState} from 'react';
import LeftPanel from '../../organism/leftPanel/LeftPanel';
import SudokuGrid from '../../organism/sudokuGrid/SudokuGrid';
import GameControl from "../../molecules/gameControl/GameControl";
import './gamePage.scss';

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

    const addActionToStack = (action) => {
        setActionStack((prevStack) => [...prevStack, action]);
    };

    const [grid, setGrid] = useState(initialGrid);
    const [isSolve, setIsSolve] = useState(false);

    useRef(() => {
    }, [setGrid, grid])

    //Resolve Sudoku methode
    const handleSudoku = () => {
        const isSolve = solveSudoku;
        if (isSolve()) {
            setIsSolve(true);
        }
    };

    function solveSudoku() {
        const emptyCell = findEmptyCell(grid);

        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;

                if (solveSudoku()) {
                    return true;
                }

                grid[row][col] = 0;
            }
        }

        return false;
    }

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

    //Reset Sudoku grid
    const resetSudoku = () => {
        setGrid(initialGrid);
        setIsSolve(false);
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
                <SudokuGrid
                    grid={grid}
                    onCellClick={(row, col, newValue) => {
                        updateCell(row, col, newValue);
                    }}
                />
                <GameControl cancel={undoLastAction} onReset={resetSudoku} solveSudoku={() => handleSudoku()}/>
                {isSolve &&
                    <div>Success</div>
                }
            </div>
        </div>
    );
};

export default GamePage;
