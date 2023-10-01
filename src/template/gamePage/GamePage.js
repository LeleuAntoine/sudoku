import React from 'react';
import LeftPanel from '../../organism/leftPanel/LeftPanel';
import SudokuGrid from '../../organism/sudokuGrid/SudokuGrid';
import './gamePage.scss';
import GameControl from "../../molecules/gameControl/GameControl";

const GamePage = () => {
    const sampleGrid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    return (
        <div className="game-page">
            <LeftPanel />
            <GameControl onAutoPosition={() => {}} onReset={() => {}}/>
            <SudokuGrid grid={sampleGrid} onCellClick={() => {}}/>
        </div>
    );
};

export default GamePage;
