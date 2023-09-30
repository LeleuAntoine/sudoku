import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const Title = ({text, fontSize, fontWeight, color}) => {
    const titleStyle = {
        '--title-font-size': `${fontSize}rem`,
        '--title-font-weight': fontWeight,
        '--title-color': color,
    };

    return (
        <h1 className="title" style={titleStyle}>
            {text}
        </h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    fontWeight: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default Title;
