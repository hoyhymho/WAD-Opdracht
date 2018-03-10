import React from 'react';
import PropTypes from 'prop-types';

// const {number} = PropTypes;

const Form = ({value, onChange}) => {

    const handleChangeValue = (e, info) => {
        const {value} = e.currentTarget
        onChange(value,info);
    }
    
    return (
        <div className="edit-post">
            <label className="inputLabel" htmlFor="title">Title</label>
            <input 
                type="text"
                id="title"
                onChange={handleChangeValue(e, "title")}
            />

            <label className="inputLabel" htmlFor="author">Author</label>
            <input 
                type="text"
                id="author"
                onChange={handleChangeValue}
            />

            <label className="inputLabel" htmlFor="content">Content</label>
            <input 
                type="text"
                id="content"
                onChange={handleChangeValue}
            />
        </div>
    );
}

Form.propTypes = {
    
}

export default Form;