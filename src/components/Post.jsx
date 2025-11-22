import React from "react";
import classes from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <li>
      <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.body}>{body}</p>
      </div>
    </li>
  );
};

export default Post;
