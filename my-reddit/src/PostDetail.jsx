import React from 'react';
//import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {

  return (
    <div className="postdetail">
      <section className="detailtop">
        <h2>{post.title}</h2>
        <p className="postBy">{post.date} gepost door <span className="author">{post.author}</span></p>

        <p className="content">{post.content}</p>    
      </section> 
      
    </div>
  )
}

export default PostDetail;