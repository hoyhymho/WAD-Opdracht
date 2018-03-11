import React from 'react';
import PropTypes from 'prop-types';

// const {number} = PropTypes;

const Form = ({onChange}) => {

    const handleChangeValue = e => {
        const {name, value} = e.currentTarget
        onChange(name, value);
        console.log(name)
    }
    
    return (
        <div className="edit-post">
            <h3>Edit post</h3>
            
            <label className="inputLabel" htmlFor="title">Title</label>
            <input 
                type="text"
                name="title"
                onChange={handleChangeValue}
            />

            <label className="inputLabel" htmlFor="author">Author</label>
            <input 
                type="text"
                name="author"
                onChange={handleChangeValue}
            />

            <label className="inputLabel" htmlFor="content">Content</label>
            <input 
                type="text"
                name="content"
                onChange={handleChangeValue}
            />

            <label className="inputLabel" htmlFor="date">Date</label>
            <input 
                type="date"
                name="date"
                onChange={handleChangeValue}
            />
        </div>
    );
}

Form.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Form;