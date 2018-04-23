import Post from '../models/Post';
import Comment from '../models/Comment';
import { decorate, observable, action, computed } from "mobx";

class Store {

    posts = [];

    constructor(){
        this.addPost(new Post(`Shrek Units`, `I've started using Shrek as a unit of time, where 1 shrek = 1hr 35min (the length of the movie)
        Examples: "See you in a shrek!" (1hr 35min) "Dinner will be ready in half a shrek." (47.5min)
        "My birthday is only 469.9 shreks away!" (1 month)`, "2018-01-01", "ShrekMan", "https://vignette.wikia.nocookie.net/shrek/images/c/cc/Shrek_smiling.jpg/revision/latest?cb=20130413033028", new Comment(`delet`) ));
    }

    addPost = (post, callback) => {
        this.posts.push(post);
        console.log(post.id);
        ()=>{callback(post.id)};
    }
    
    handleAddPost = (title, content, image, callback) => {
        const date = new Date().toISOString().slice(0,10);
        const author = "you";
 
        this.addPost(new Post(title, content, date, author, image), callback);  
        //()=>{callback(id)
    }

    handleDeletePost = post => {
        this.posts.remove(post);
    }
}

decorate(Store, {
    posts: observable,
    handleChangeValue: action,
    handleAddPost: action,
    handleDeletePost: action,
    handleChangeInput: action,
    handleAddComment: action
});

const store = new Store();
export default store;