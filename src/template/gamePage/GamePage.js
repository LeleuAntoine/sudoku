import React, {useRef, useState} from 'react';
import LeftPanel from '../../organism/leftPanel/LeftPanel';
import SudokuGrid from '../../organism/sudokuGrid/SudokuGrid';
import GameControl from "../../molecules/gameControl/GameControl";
import './gamePage.scss';

const GamePage = () => {
    const [sampleGrid, setSampleGrid] = useState([
        [0, 0, 9, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 2, 0, 6, 0, 0, 0],
        [0, 0, 7, 0, 9, 0, 8, 0, 0],
        [0, 0, 5, 0, 8, 0, 3, 0, 0],
        [8, 0, 0, 0, 3, 0, 0, 0, 7],
        [0, 0, 2, 1, 0, 4, 9, 0, 0],
        [0, 4, 0, 0, 5, 0, 0, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 6, 0, 8, 0, 9, 0, 2, 0],
    ]);
    const [isSolve, setIsSolve] = useState(false);

    useRef(() => {
    }, [setSampleGrid, sampleGrid])

    function solveSudoku() {
        const emptyCell = findEmptyCell(sampleGrid);

        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (isSafe(sampleGrid, row, col, num)) {
                sampleGrid[row][col] = num;

                if (solveSudoku()) {
                    return true;
                }

                sampleGrid[row][col] = 0;
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

    const resetSudoku = () => {
        // Remplacez sampleGrid par votre grille initiale
        const initialGrid = [
            [0, 0, 9, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 2, 0, 6, 0, 0, 0],
            [0, 0, 7, 0, 9, 0, 8, 0, 0],
            [0, 0, 5, 0, 8, 0, 3, 0, 0],
            [8, 0, 0, 0, 3, 0, 0, 0, 7],
            [0, 0, 2, 1, 0, 4, 9, 0, 0],
            [0, 4, 0, 0, 5, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 6, 0, 8, 0, 9, 0, 2, 0],
        ];

        // Mettez à jour la grille avec les valeurs initiales
        setSampleGrid(initialGrid);

        // Réinitialisez également la variable d'état isSolve si nécessaire
        setIsSolve(false);
    };

    const updateCell = (row, col, newValue) => {
        // Assurez-vous que les indices de ligne et de colonne sont valides
        if (row >= 0 && row < 9 && col >= 0 && col < 9) {
            // Créez une copie de la grille actuelle
            const updatedGrid = [...sampleGrid];
            // Mettez à jour la valeur de la cellule spécifiée
            updatedGrid[row][col] = newValue;
            // Mettez à jour l'état de la grille
            setSampleGrid(updatedGrid);
        }
    };

    return (
        <div className={"game-page"}>
            <div className={'left-panel'}>
                <LeftPanel/>
            </div>
            <div className={"body-game"}>
                <GameControl onAutoPosition={() => {
                }} onReset={resetSudoku}/>
                <SudokuGrid
                    grid={sampleGrid}
                    onCellClick={(row, col, newValue) => {
                        updateCell(row, col, newValue);
                    }}
                    solveSudoku={() => {
                        const isSolve = solveSudoku;
                        if (isSolve()) {
                            setIsSolve(true);
                        }
                    }}/>
                {isSolve &&
                    <div>Success</div>
                }
            </div>
        </div>
    );
};

export default GamePage;
