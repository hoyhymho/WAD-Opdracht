import React from 'react';
import PropTypes from 'prop-types';
// const {number} = PropTypes;

const Post = ({title, author, content, date}) => {
    
    return (
        <article className="post-container">
            <h2>{title}</h2>
            <p className="postBy">{date} gepost door <span className="author">{author}</span></p>

            <p className="content">{content}</p>    
        </article>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Post;