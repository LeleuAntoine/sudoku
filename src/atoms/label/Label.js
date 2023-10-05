import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Label = ({text, fontSize, color, icon}) => {
    const labelStyle = {
        '--label-font-size': `${fontSize}rem`,
        '--label-color': color,
    };

    return (
        <label className="label" style={labelStyle}>
            {icon &&
                <FontAwesomeIcon icon={icon} className={'label-icone'}/>
            }
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
