//Check if sudoku grid is valid
export const isSudokuValid = (grid) => {
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
export const solveSudoku = (grid) => {
    const clonedGrid = [...grid];

    const emptyCell = findEmptyCell(clonedGrid);

    if (!emptyCell) {
        return clonedGrid;
    }

    const [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
        if (isSafe(clonedGrid, row, col, num)) {
            clonedGrid[row][col] = num;

            const result = solveSudoku(clonedGrid);

            if (result) {
                return result;
            }

            clonedGrid[row][col] = 0;
        }
    }

    return null;
};



export const findEmptyCell = (grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}

const isSafe = (grid, row, col, num) => {
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
