import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import {observer} from 'mobx-react';

import gql from "graphql-tag";
//import { Mutation } from "react-apollo";
import GET_POSTS from "../graphql/getAllPosts"

import { graphql, compose } from "react-apollo";

const DELETE_POST = gql`
    mutation deletePost($id: String!) {
        deletedPost: deletePost(_id: $id) {
            _id
        }
    }
`;

const Posts = ({posts, deletePost}) => {

    const renderPost = (post, id) => {

        const handleDelete = e => {
            deletePost({ variables: { id: post._id } });
        };
        
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

                    <button onClick={(() => handleDelete({variables: {id: post._id} }))}>Delete Post</button>
                </div>
            
            </section>
        );
    }
    
    return (
        <section className="all-posts">

            <article>
                <h2>Posts</h2>
                {posts.map(post => renderPost(post, post._id))}
                <Link to="/add"><button className="button" value="Add Post">Add Post</button></Link>
            </article>
            
        </section>

    );
}

Posts.propTypes = {
    store: PropTypes.any
}

export default compose(
    graphql(DELETE_POST, {
      name: "deletePost",
      options: {
        update: (proxy, { data: { deletedPost } }) => {
          const data = proxy.readQuery({ query: GET_POSTS });
          data.allPosts = data.allPosts.filter(
            post => post._id !== deletedPost._id
          );
          proxy.writeQuery({ query: GET_POSTS, data });
        }
      }
    })
  )(Posts);
  


//export default observer(Posts);