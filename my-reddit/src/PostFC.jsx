import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
// const {number} = PropTypes;

const Post = ({posts, onAddPost, onChange, onDeletePost}) => {

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
                        <img src="https://b.thumbs.redditmedia.com/Op1NSjYfUcy_ZH3mkRcpyojBoROKp12Ay84xhQMEneE.jpg" alt="thumb"/>
                    </div>

                    <div>
                        <h2>{posts.title}</h2>
                        <p className="postBy">{posts.date} gepost door <span className="author">{posts.author}</span></p>

                        <p className="content">{posts.content}</p>    
                    </div>
                </article>
                
                <div className="edit-post">
                    <label className="inputLabel" htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={e => handleChangeInput(e,id)} />

                    <label className="inputLabel" htmlFor="author">Author</label>
                    <input type="text" name="author" onChange={e => handleChangeInput(e,id)} />

                    <label className="inputLabel" htmlFor="content">Content</label>
                    <input type="text" name="content" onChange={e => handleChangeInput(e,id)} />

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
            </article>

            <article>
                <Form onAddPost={onAddPost} />
            </article>
           
            
        </section>

    );
}

Post.propTypes = {
    onAddPost: PropTypes.func,
    onChangePost: PropTypes.func,
    onDeletePost: PropTypes.func
}

export default Post;