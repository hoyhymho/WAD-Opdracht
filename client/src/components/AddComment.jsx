import React from 'react';
import PropTypes from 'prop-types'

import { Mutation } from "react-apollo";
import ADD_COMMENT from "../graphql/addComment";
import GET_POST from "../graphql/getPost";


const AddComment = ({postId}) => {

  let input = null;

  return( 
    <Mutation
    mutation={ADD_COMMENT}
    refetchQueries={[{ query: GET_POST, variables: { id: postId } }]}
    >
      {(addComment, { loading, error }) => (
        <form onSubmit={ e => {
            e.preventDefault();
            
            if(input.value){
              console.log(input.value);
              addComment({
                variables: { post: postId, message: input.value }
              });
              e.currentTarget.reset();           
            }
          }
        } className ="add-comment">
          <p>Add comment</p>
          <textarea className="comment-input" ref={field => input = field} />
          <input className="button comment-button" type="submit" value="SAVE"  />
        </form>
      )}
    </Mutation>
  )
}

AddComment.propTypes = {
  onSubmit: PropTypes.func
}

export default AddComment;