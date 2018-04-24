import React from 'react';
import Comment from '../models/Comment'
import AddComment from '../components/AddComment'
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const PostDetail = ({ store, id, post }) => {

  const renderComment = (comment) => {
    
    return(
      <article className="comment" key={comment.created}>
        <p className="comment-date">{new Date(comment.created).toLocaleTimeString()} -</p>
        <p>{comment.message}</p>
      </article>
    )
  }

  return (
    <div className="postdetail">
      <section className="detailtop">
        <div className="votes">
          <div className="upvote" onClick={post.upvote}></div>
          <p>{post.total}</p>
          <div className="downvote" onClick={post.downvote}></div>
        </div>
        <div>
          <h2>{post.title}</h2>
          <p className="postBy">{post.date} posted by <span className="author">{post.author}</span></p>
          <div className="content">
            <p className="contenttxt">{post.content}</p>   
            <div className="image-detail">
              <img src={post.image} alt="detail-img"/>
            </div> 
          </div>
        </div>
      </section> 
        
      <section className="comments">
      <AddComment store={store} id={id} post={post} />
      {
        (post.comments) ? post.comments.map( comment => renderComment(comment) ) : console.log("geen comments")
      }
             
      </section>
    </div>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  comment: PropTypes.instanceOf(Comment)
}

PostDetail.defaultProps = {
  comment: new Comment("test")
}

export default observer(PostDetail);