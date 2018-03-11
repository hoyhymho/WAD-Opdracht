import React from 'react';
import PropTypes from 'prop-types';
// const {number} = PropTypes;

const Post = ({title, author, content, date}) => {
    
    return (
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
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Post;