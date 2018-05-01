import Post from '../models/Post';
import Comment from '../models/Comment';
import { decorate, observable, action } from "mobx";
import Api from "../api/posts.js";

class Store {

    posts = [];

    constructor(){
        this.posts.push(new Post(`Shrek Units`, `I've started using Shrek as a unit of time, where 1 shrek = 1hr 35min (the length of the movie)
        Examples: "See you in a shrek!" (1hr 35min) "Dinner will be ready in half a shrek." (47.5min)
        "My birthday is only 469.9 shreks away!" (1 month)`, "2018-01-01", "ShrekLover", "https://vignette.wikia.nocookie.net/shrek/images/c/cc/Shrek_smiling.jpg/revision/latest?cb=20130413033028", new Comment(`delet`) ));

        this.api = new Api();
        this.api.getAll().then(posts => this._add(...posts));
    }

    _add = (...posts) => {
        posts.forEach(post => {
            const { title, _id, content, date, author, image, upvotes, downvotes } = post;
            this.posts.push(new Post(title, _id, content, date, author, image, upvotes, downvotes));
        });
    };

    add = (title, content, image, callback) => {
        const date = new Date().toISOString().slice(0,10);
        const author = "you";
        this.api.create(title, content, image).then(post => this._add(post, callback));
    };

    update = post => {
        this.api.update(post).then(post => this._update(post));
    };

    _update = post => {
        const index = this.posts.findIndex(check => check.id === post.id);
        this.posts[index] = post;
    };

    remove = post => {
        this.api.remove(post).then(() => this._remove(post));
    };

    _remove = post => {
        this.posts.remove(post);
    };

    setPost = value => {
        this.content = value;
    };
    resetPost = value => {
        this.content = ``;
    };

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

/*

class Store {

    posts = [];

    constructor(){
        this.addPost(new Post(`Shrek Units`, `I've started using Shrek as a unit of time, where 1 shrek = 1hr 35min (the length of the movie)
        Examples: "See you in a shrek!" (1hr 35min) "Dinner will be ready in half a shrek." (47.5min)
        "My birthday is only 469.9 shreks away!" (1 month)`, "2018-01-01", "ShrekLover", "https://vignette.wikia.nocookie.net/shrek/images/c/cc/Shrek_smiling.jpg/revision/latest?cb=20130413033028", new Comment(`delet`) ));
    }

    addPost = (post, callback) => {
        this.posts.push(post);
        console.log(post.id);
        
        if (callback) {
            callback(post.id);
       }
    }
    
    handleAddPost = (title, content, image, callback) => {
        const date = new Date().toISOString().slice(0,10);
        const author = "you";
 
        this.addPost(new Post(title, content, date, author, image), callback);  
        //()=>{callback(id)}
    }

    handleDeletePost = post => {
        this.posts.remove(post);
    }
}

*/