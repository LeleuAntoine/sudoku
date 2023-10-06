import React from 'react';
import PropTypes from 'prop-types';
import './sudokuGrid.scss'
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";

const SudokuGrid = ({grid, onCellClick}) => {
    const {t} = useTranslation();

    const handleCellClick = (row, col, newValue) => {
        if (newValue >= 0 && newValue <= 9) {
            newValue = isNaN(newValue) ? 0 : newValue;
            onCellClick(row, col, newValue);
        } else {
            toast.error(t('translation:errorValue'), {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
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
                                    onChange={(e) => handleCellClick(rowIndex, colIndex, parseInt(e.target.value, 10) || 0)}
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
