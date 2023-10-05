import React from 'react';
import PropTypes from 'prop-types';
import './square.scss';

const Square = ({value, size, fontSize}) => {
    const squareStyle = {
        '--square-size': `${size}rem`,
        '--font-size': `${fontSize}rem`,
    };

    return (
        <div className="square" style={squareStyle}>
            {value}
        </div>
    );
};

Square.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
};

export default Square;
