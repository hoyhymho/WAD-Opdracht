import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input'

class Post extends Component { //functional component van maken en constructor naar App.jsx verplaatsen?

    constructor(){
        super()
        this.state = {title: "title"}
    }

    handleChangeValue = (info, value) => {
    console.log("log vanuit de App.jsx:" , info, value)
    this.setState({[info]:value});
    }

    render() {
        const {title} = this.state;

        return(
            <article className="post-container">
                <h2>{title}</h2>
                <p className="postBy">{}uur geleden gepost door <span className="author">{}</span></p>

                <p className="content">{}</p>
                
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