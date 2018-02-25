import Post from './Post';

import React, { Component } from 'react';

class AllPosts extends Component {
    render() {
        return(
            <div>
                <Post title="titeltest" time="5" author="jh"/>
                <Post title="post2test" time="5" author="jddsh"/>
            </div>
            
        );
    }
}

export default AllPosts;