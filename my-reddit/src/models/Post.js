import uniqid from "uniqid";
import Comment from '../models/Comment';
import {observable, decorate, action, computed} from "mobx";

class Post {
  constructor(title, content, date, author, image, comments) {
    this.id = uniqid();
    this.title = title;
    this.content = content;
    this.date = date;
    this.author = author;
    this.image = image;
    this.comments = [];
    this.upvotes = 1;
    this.downvotes = 0;
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

  upvote = () => {
    this.upvotes++;
  }

  downvote = () => {
    this.downvotes++;
  }

  get total() {
    return this.upvotes - this.downvotes;
  }

}

decorate(Post, {
  title: observable, 
  content: observable, 
  date: observable, 
  author: observable, 
  image: observable, 
  comments: observable,
  upvotes: observable,
  downvotes: observable,
  addComment: action,
  upvote: action,
  downvote: action,
  total: computed,
})

export default Post;
