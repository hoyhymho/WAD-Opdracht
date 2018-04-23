import React from 'react';
import PropTypes from 'prop-types'

const AddComment = ({onSubmit}) => {

  let input = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.value){
      onSubmit(input.value);
      e.currentTarget.reset();
    }
    
  }

  return <form onSubmit={handleSubmit} className ="add-comment">
    <p>Add comment</p>
    <textarea className="comment-input" ref={field => input = field} />
    <input className="button comment-button" type="submit" value="SAVE"  />
  </form>
}

AddComment.propTypes = {
  onSubmit: PropTypes.func
}

export default AddComment;