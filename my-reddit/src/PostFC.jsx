import React from 'react';
import PropTypes from 'prop-types';
// const {number} = PropTypes;

const Post = ({title, author, content, date, posts, onAddPost, onChange}) => {

    const handleAddPost = () =>{
        const id = Math.random();
        console.log(id);
        onAddPost(id);
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
                        <p className="postBy">{date} gepost door <span className="author">{posts.author}</span></p>

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
                </div>
               

            </section>
            
        );
    }
    
    return (
        <section className="all-posts">
            <article className="post-container">
                <div className="thumbnail">
                    <img src="https://b.thumbs.redditmedia.com/Op1NSjYfUcy_ZH3mkRcpyojBoROKp12Ay84xhQMEneE.jpg" alt="thumb"/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p className="postBy">{date} gepost door <span className="author">{author}</span></p>

                    <p className="content">{content}</p>    
                </div>
            </article>

            <article>
                <h2>Posts</h2>
                {(Object.keys(posts).map(id => renderPost(posts[id], id)))}

            </article>

            <div className="addbutton">
                <button onClick={(() => handleAddPost())}>Add Post</button>
            </div>
            
        </section>

    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Post;