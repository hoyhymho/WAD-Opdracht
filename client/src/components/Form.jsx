import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Mutation } from "react-apollo";
import ADD_POST from "../graphql/addPost";
import GET_POSTS from "../graphql/getAllPosts"

const Form = ({store, posts, history}) => {

    let titleInput = null;
    let contentInput = null;
    let imageInput = null;

    const redirect = (id) => {
        console.log(history, id);
        history.push(`/post/${id}`);
    }
    
    return (
        <div className="add-post">
            <h3>Add post</h3>
            
            <Mutation 
                mutation={ADD_POST} 
                update={(cache, {data: { addPost } }) => {
                    const { allPosts } = cache.readQuery({ query: GET_POSTS });
                    console.log(allPosts);
                    cache.writeQuery({
                        query: GET_POSTS,
                        data: { allPosts: allPosts.concat([addPost]) }
                });
                }} 
            >
            {(addPost) => (
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    if(titleInput.value && contentInput.value && imageInput.value){
                        addPost(
                            {variables: {
                                title: titleInput.value, 
                                content: contentInput.value, 
                                image: imageInput.value, 
                            } });
                        e.currentTarget.reset();
                        history.push(`/`);
                    }
                }} >
                    <label className="inputLabel" htmlFor="title">Title</label>
                    <input type="text" name="title" ref={field => titleInput = field}/>

                    <label className="inputLabel" htmlFor="image">Image URL</label>
                    <input type="text" name="image" ref={field => imageInput = field}/>

                    <label className="inputLabel" htmlFor="content">Content</label>
                    <textarea className="contentInput" type="text" name="content" ref={field => contentInput = field}/>

                    <input className="button" type="submit" value="Add Post" />

                </form>
            )}
            </Mutation>
            
        </div>
    );
}

Form.propTypes = {
    store: PropTypes.any
}

export default withRouter(Form);