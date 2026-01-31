import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router";

const Post = ({ id, author, body }) => {
  return (
    <li>
      <div className={classes.post}>
        <Link to={id}>
          <p className={classes.author}>{author}</p>
          <p className={classes.body}>{body}</p>
        </Link>
      </div>
    </li>
  );
};

export default Post;
