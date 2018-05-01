import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const Posts = ({store}) => {

    const renderPost = (post, id) => {
        
        return (
            <section key={id} className="post-edit">
                <article className="post-container">
                    <div className="votes">
                        <div className="upvote" onClick={post.upvote}></div>
                        <p>{post.total}</p>
                        <div className="downvote" onClick={post.downvote}></div>
                    </div>

                    <div className="thumbnail">
                        <img src={post.image} alt="thumb"/>
                    </div>

                    <div>
                        <Link to={`/post/${id}`}><h2>{post.title}</h2></Link>
                        <p className="postBy">{post.date} posted by <span className="author">{post.author}</span></p>

                        <p className="content">{post.content}</p>    
                    </div>
                </article>
                
                <div className="edit-post">
                    <label className="inputLabel" htmlFor="title">Title</label>
                    <input type="text" name="title" defaultValue={post.title} onChange={e => post.updateTitle(e.target.value)} />

                    <label className="inputLabel" htmlFor="author">Author</label>
                    <input type="text" name="author" defaultValue={post.author} onChange={e => post.updateAuthor(e.target.value)} />

                    <label className="inputLabel" htmlFor="content">Content</label>
                    <textarea className="contentInput" type="text" name="content" defaultValue={post.content} onChange={e => post.updateContent(e.target.value)} />

                    <button onClick={(() => store.handleDeletePost(post))}>Delete Post</button>
                </div>
               
            </section>
            
        );
    }
    
    return (
        <section className="all-posts">

            <article>
                <h2>Posts</h2>
                {store.posts.map(post => renderPost(post, post.id))}
                <Link to="/add"><button className="button" value="Add Post">Add Post</button></Link>
            </article>
            
        </section>

    );
}

Posts.propTypes = {
    store: PropTypes.any
}


export default observer(Posts);