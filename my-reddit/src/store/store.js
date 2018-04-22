import Comment from '../models/Comment';
import { decorate, observable, action, computed } from "mobx";

class Store {

    constructor(){
        this.state = {
          posts: { "1": {title: "Shrek Units", content: `I've started using Shrek as a unit of time, where 1 shrek = 1hr 35min (the length of the movie)
          Examples: "See you in a shrek!" (1hr 35min) "Dinner will be ready in half a shrek." (47.5min)
          "My birthday is only 469.9 shreks away!" (1 month)`, author: "ShrekMan", date: "2018-01-01", image:"https://vignette.wikia.nocookie.net/shrek/images/c/cc/Shrek_smiling.jpg/revision/latest?cb=20130413033028", comments: {"a": new Comment("delet")}}}
        }
    }

    handleChangeValue = (info, value) => {
        console.log("log vanuit de App.jsx:" , info, value)
        this.setState({[info]:value});
    }
    
    handleAddPost = (title, content, image, callback) => {
        const posts = { ...this.state.posts };
        const date = new Date().toISOString().slice(0,10);
        const id = Date.now();
        posts[id] = {key: id,  title: title, content: content, author: "you", date: date, image: image, comments: {} };
        this.setState({ posts }, ()=>{callback(id)});
    }

    handleDeletePost = id => {
        const posts = { ...this.state.posts };
        delete posts[id];
        this.setState({ posts });
    }

    handleChangeInput = (id, post) => {
        const {posts} = this.state;
        const updatedPosts = {...posts};
        updatedPosts[id] = post;
        this.setState({posts:updatedPosts});
    }

    handleAddComment = (postId, value) => {
        const comment = new Comment(value);
        const posts = {...this.state.posts}
        posts[postId].comments[Date.now()] = comment;
        this.setState({posts});
        console.log(comment);
    }
}

decorate(Store, {
    handleChangeValue: action,
    handleAddPost: action,
    handleDeletePost: action,
    handleChangeInput: action,
    handleAddComment: action
});

const store = new Store();
window.store = store; //enkel in dev
export default store;