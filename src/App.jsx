import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader newPost={showModalHandler} />
      <main>
        <PostList
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
