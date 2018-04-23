import uniqid from "uniqid";
import Comment from '../models/Comment';
import {observable, decorate} from "mobx";

class Post {
  constructor(title, content, date, author, image, comments) {
    this.id = uniqid();
    this.title = title;
    this.content = content;
    this.date = date;
    this.author = author;
    this.image = image;
    this.comments = [];
  }

  updateTitle = value => {
    this.title = value;
  };

  updateAuthor = value => {
    this.author = value;
  };

  updateContent = value => {
    this.content = value;
  };

  addComment = value => {
    this.comments.push(new Comment(value))
  }

}

decorate(Post, {
  title: observable, 
  content: observable, 
  date: observable, 
  author: observable, 
  image: observable, 
  comments: observable,
})

export default Post;
