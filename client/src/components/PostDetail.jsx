import React from 'react';
import Comment from '../models/Comment'
import AddComment from '../components/AddComment'
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import { Query } from "react-apollo";
import GET_POST from "../graphql/getPost";

const PostDetail = ({ id }) => {

  return (
    <Query query={GET_POST} variables={{ id }}>
      {({ data: { post }, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error...</p>;
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
            <AddComment postId={id} />
            {
              (post.comments) ? 
                post.comments.map( comment => (
                  <article className="comment" key={comment.created}>
                  <p className="comment-date">{new Date(comment.created).toLocaleTimeString()} -</p>
                  <p>{comment.message}</p>
                </article>
                )) : console.log(post)
            }

            </section>
          </div>
          );
        }}
      </Query>
  )
}

PostDetail.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.instanceOf(Comment)
}

PostDetail.defaultProps = {
  comment: new Comment("test")
}

export default observer(PostDetail);