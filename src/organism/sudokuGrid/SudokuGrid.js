import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './sudokuGrid.scss'

const SudokuGrid = ({grid, onCellClick}) => {
    const [errorMsg, setErrorMsg] = useState();
    const handleCellClick = (row, col, newValue) => {
        newValue = isNaN(newValue) ? 0 : newValue;
        onCellClick(row, col, newValue);
    };

    return (
        <div>
            {errorMsg &&
                <p className="error-message">{errorMsg}</p>
            }
            <div className="sudoku-grid">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`grid-cell ${cell === 0 ? 'empty-cell' : ''}`}
                                id={`grid-cell ${cell === 0 ? 'empty-cell' : ''}`}
                            >
                                <input
                                    value={cell !== 0 ? cell : ''}
                                    onChange={(e) => {
                                        const newValue = parseInt(e.target.value, 10) || 0;
                                        if (newValue >= 0 && newValue <= 9) {
                                            handleCellClick(rowIndex, colIndex, newValue);
                                        } else {
                                            setErrorMsg('La valeur doit être comprise entre 1 et 9');
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

SudokuGrid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default SudokuGrid;
