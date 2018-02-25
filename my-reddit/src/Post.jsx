import React, { Component } from 'react';

class Post extends Component {

    render() {
        const {title, time, author} = this.props;
        return(
            <div className="post-container">
                <h2>{title}</h2>
                <p className="postBy">{time}uur geleden gepost door <span className="author">{author}</span></p>
            </div>
        );
    }
}

export default Post;