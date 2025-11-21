import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            enteredBody={enteredBody}
            enteredAuthor={enteredAuthor}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="SRT" text="Text2" />
      </ul>
    </>
  );
};

export default PostList;
