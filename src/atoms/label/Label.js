import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({ text, fontSize, color }) => {
    const labelStyle = {
        '--label-font-size': `${fontSize}rem`,
        '--label-color': color,
    };

    return (
        <label className="label" style={labelStyle}>
            {text}
        </label>
    );
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default Label;
