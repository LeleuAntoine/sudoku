import React from 'react';
import PropTypes from 'prop-types';

const Select = ({id, value, onChange, options, fontSize}) => {
    return (
        <select id={id} value={value} onChange={onChange} style={{fontSize: fontSize}}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    fontSize: PropTypes.string,
};

export default Select;
