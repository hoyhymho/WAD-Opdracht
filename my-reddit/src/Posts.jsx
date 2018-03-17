import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Posts = ({posts, onChange, onDeletePost}) => {

    const handleDeletePost = (id) =>{
        console.log(id);
        onDeletePost(id);
    }

    const handleChangeInput = (e, id) => {
        const {value, name} = e.currentTarget;
        const post = posts[id];
        const updatedPost = {...post};
        updatedPost[name] = value
        onChange(id, updatedPost)
    }

    const renderPost = (posts, id) => {
        
        return (
            <section key={id} className="post-edit">
                <article className="post-container">
                    <div className="thumbnail">
                        <img src={posts.image} alt="thumb"/>
                    </div>

                    <div>
                        <Link to={`/post/${id}`}><h2>{posts.title}</h2></Link>
                        <p className="postBy">{posts.date} posted by <span className="author">{posts.author}</span></p>

                        <p className="content">{posts.content}</p>    
                    </div>
                </article>
                
                <div className="edit-post">
                    <label className="inputLabel" htmlFor="title">Title</label>
                    <input type="text" name="title" defaultValue={posts.title} onChange={e => handleChangeInput(e,id)} />

                    <label className="inputLabel" htmlFor="author">Author</label>
                    <input type="text" name="author" defaultValue={posts.author} onChange={e => handleChangeInput(e,id)} />

                    <label className="inputLabel" htmlFor="content">Content</label>
                    <textarea className="contentInput" type="text" name="content" defaultValue={posts.content} onChange={e => handleChangeInput(e,id)} />

                    <button onClick={(() => handleDeletePost(id))}>Delete Post</button>
                </div>
               
            </section>
            
        );
    }
    
    return (
        <section className="all-posts">

            <article>
                <h2>Posts</h2>
                {(Object.keys(posts).map(id => renderPost(posts[id], id)))}

                <Link to="/add"><button className="button" value="Add Post">Add Post</button></Link>
            </article>
            
        </section>

    );
}

Posts.propTypes = {
    posts: PropTypes.object.isRequired,
    onChangePost: PropTypes.func,
    onDeletePost: PropTypes.func
}

export default Posts;