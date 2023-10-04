import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({label, size, fontSize, onClick, classname}) => {
    const buttonStyle = {
        '--button-size': `${size}rem`,
        '--font-size': `${fontSize}rem`,
    };

    return (
        <button className={`button ${classname}`} style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
