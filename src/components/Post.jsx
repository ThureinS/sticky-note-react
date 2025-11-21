import React from "react";
import classes from "./Post.module.css";

const Post = ({ author, text }) => {
  return (
    <li>
      <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{text}</p>
      </div>
    </li>
  );
};

export default Post;
