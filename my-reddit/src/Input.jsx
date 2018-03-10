import React from 'react';
import PropTypes from 'prop-types';

// const {number} = PropTypes;

const Input = ({onChange, forwhat, type}) => {

    const handleChangeValue = e => {
        const {value} = e.currentTarget
        onChange(value);
    }
    
    return (
        <div className="edit-post">
            <label className="inputLabel" htmlFor={forwhat}>{forwhat}</label>
            <input 
                type={type}
                id={forwhat}
                onChange={handleChangeValue}
            />
        </div>
    );
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    forwhat: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Input;