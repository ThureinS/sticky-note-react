import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = ({ modalIsVisible, hideModalHandler }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }
  return (
    <>
      {modalIsVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no notes yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
