import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Form = ({onAddPost, history}) => {

    let titleInput = null;
    let contentInput = null;
    let imageInput = null;

    const redirect = (id) => {
        console.log(history, id);
        history.push(`/post/${id}`);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(titleInput.value, contentInput.value);
        if(titleInput.value && contentInput.value && imageInput.value){
            onAddPost(titleInput.value, contentInput.value, imageInput.value, redirect);
            e.currentTarget.reset();
        }
    }
    
    return (
        <div className="add-post">
            <h3>Add post</h3>
            
            <form onSubmit={handleSubmit}>

                <label className="inputLabel" htmlFor="title">Title</label>
                <input type="text" name="title" ref={field => titleInput = field}/>

                <label className="inputLabel" htmlFor="image">Image URL</label>
                <input type="text" name="image" ref={field => imageInput = field}/>

                <label className="inputLabel" htmlFor="content">Content</label>
                <textarea className="contentInput" type="text" name="content" ref={field => contentInput = field}/>

                <input className="button" type="submit" value="Add Post" />

            </form>

            
        </div>
    );
}

Form.propTypes = {
    onAddPost: PropTypes.func
}

export default withRouter(Form);