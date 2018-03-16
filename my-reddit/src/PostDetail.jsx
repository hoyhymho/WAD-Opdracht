import React from 'react';
//import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {

  return (
    <article className="post">
      <p>{post.title}</p>
    </article>
  )
}

export default PostDetail;