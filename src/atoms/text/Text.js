import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

const Text = ({text, fontSize, lineHeight, color}) => {
    const textStyle = {
        '--text-font-size': `${fontSize}rem`,
        '--text-line-height': lineHeight,
        '--text-color': color,
    };

    return (
        <p className="text" style={textStyle}>
            {text}
        </p>
    );
};

Text.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    lineHeight: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default Text;
