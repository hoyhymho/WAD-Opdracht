import React from 'react';
import PropTypes from 'prop-types';

// const {number} = PropTypes;

const Input = ({onChange, forLabel, type}) => {

    const handleChangeValue = e => {
        const {value} = e.currentTarget
        onChange(value);
    }
    
    return (
        <div>
            <label htmlFor={forLabel}>{forLabel}</label>
            <input 
                type={type} 
                id={forLabel} 
                onChange={handleChangeValue}
            />
        </div>
    );
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Input;