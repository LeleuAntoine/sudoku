import React from 'react';
import PropTypes from 'prop-types';

const SudokuGrid = ({ grid, onCellClick }) => {
    return (
        <div className="sudoku-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            className={`grid-cell ${cell === 0 ? 'empty-cell' : ''}`}
                            onClick={() => onCellClick(rowIndex, colIndex)}
                            id={`grid-cell ${cell === 0 ? 'empty-cell' : ''}`}
                        >
                            {cell !== 0 ? cell : ''}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

SudokuGrid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default SudokuGrid;
