import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = ({ modalIsVisible, hideModalHandler }) => {
  return (
    <>
      {modalIsVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="SRT" text="Text2" />
      </ul>
    </>
  );
};

export default PostList;
