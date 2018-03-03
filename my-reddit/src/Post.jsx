import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input'

class Post extends Component {

    constructor(){
        super()
        this.state = {titleValue: "title"}
      }

    handleChangeValue = (titleValue) => {
        console.log("log vanuit de Post.jsx:" ,titleValue)
        this.setState({titleValue});
    }

    render() {
        const {time, author, content} = this.props;
        const {titleValue} = this.state;

        return(
            <article className="post-container">
                <h2>{titleValue}</h2>
                <p className="postBy">{time}uur geleden gepost door <span className="author">{author}</span></p>

                <p className="content">{content}</p>
                
                <div className="edit-post">
                    <h3>Edit Post</h3>
                    <Input onChange={this.handleChangeValue} forLabel="title"/>
                </div>
                
            </article>
        );
    }
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Post;